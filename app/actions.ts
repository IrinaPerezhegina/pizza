"use server";

import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants";
import { sendEmail } from "@/shared/lib";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookiesStore = cookies();
    const cartToken = cookiesStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    /**Находим корзину по токену */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /**Если корзина не найдена возвращаем ошибку*/
    if (!userCart) {
      throw new Error("Cart not found");
    }

    /**Если корзина пустая возвращаем ошибку*/
    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    /** Создаем заказ */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment || "",
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /** Очищаем totalAmount корзины */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    /** Очищаем корзину  */
    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    /** TODO Сделать создание ссылки оплаты */

    sendEmail(data.email, "Next Pizza / Оплатите заказ #" + order.id);
  } catch (error) {}
}
// 18:30:40

// re_Vo5FTjA1_NydDmwTj7T6zZ5D6DEsQAnyd
