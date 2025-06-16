"use server";

import { prisma } from "@/prisma/prisma-client";
import { CheckoutFormValues } from "@/shared/constants";
import { OrderStatus } from "@prisma/client";

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);
  const token = "123";
  await prisma.order.create({
    data: {
      fullName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment ? data.comment : "",
      token,
      totalAmount: 5676,
      status: OrderStatus.PENDING,
      items: [],
    },
  });
  return "https://console.neon.tech/app/projects/autumn-flower-21735354/branches/br-old-base-a2ncuvk2/tables";
}
