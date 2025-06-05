"use client";

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { useCart } from "@/shared/hooks";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  const {
    items,
    loading,
    addCartItem,
    removeCartItem,
    totalAmount,
    updateItemQuantity,
  } = useCart();

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        {/* левая часть */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина" className="">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={item.ingredients}
                  // 16:20:08
                  name="Пицца"
                  price={45}
                  onClickCountButton={(type) =>
                    updateItemQuantity(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                  quantity={3}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="adress"
                className="text-base"
                placeholder="Адрес доставки"
              />
              <Textarea
                placeholder="Комментарий к заказу"
                rows={5}
                className="text-base"
              />
            </div>
          </WhiteBlock>
        </div>
        {/* правая часть */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого</span>
              <span className="text-[34px] font-extrabold">
                {totalAmount} ₽
              </span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={25} className="mr-2 text-gray-300" />
                  Стоимость товаров:
                </div>
              }
              value="5000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={25} className="mr-2 text-gray-300" />
                  Налоги:
                </div>
              }
              value="120 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={25} className="mr-2 text-gray-300" />
                  Доставка:
                </div>
              }
              value="120 ₽"
            />
            <Button
              type="submit"
              //   disabled={!totalAmount|| submitting}
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
