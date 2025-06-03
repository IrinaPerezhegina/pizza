"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { Dialog, DialogContent } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { useCartStore } from "@/shared/store";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { DialogTitle } from "../../ui/dialog";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.variants[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + " добавлен в корзину");
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
  };
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            name={product.name}
            items={product.variants}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            price={firstItem.price}
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
