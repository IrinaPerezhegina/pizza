"use client";

import { createOrder } from "@/app/actions";
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from "@/shared/components";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants";
import { useCart } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";
import { Api } from "@/shared/services/api-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { Suspense, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const {
    items,
    loading,
    addCartItem,
    removeCartItem,
    totalAmount,
    updateItemQuantity,
  } = useCart();

  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data?.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", data?.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (
    data: CheckoutFormValues
  ) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.error("Заказ успешно оформлен! 📝 Переход на оплату... ", {
        icon: "✅",
      });

      if (url !== undefined) {
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);
      console.log(error);

      toast.error("Не удалось создать заказ!", {
        icon: "❌",
      });
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <Suspense>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              {/* левая часть */}
              <div className="flex flex-col gap-10 flex-1 mb-20">
                <CheckoutCart
                  loading={loading}
                  items={items}
                  onClickCountButton={onClickCountButton}
                  removeCartItem={removeCartItem}
                />
                <CheckoutPersonalForm
                  className={cn({ "opacity-40 pointer-events-none": loading })}
                />
                <CheckoutAddressForm
                  className={cn({ "opacity-40 pointer-events-none": loading })}
                />
              </div>
              {/* правая часть */}
              <div className="w-[450px]">
                <CheckoutSidebar
                  loading={submitting || loading}
                  totalAmount={totalAmount}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </Suspense>
    </Container>
  );
}
