"use client";

import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { CartDrawerItem } from "./cart-drawer-item";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  const [totalAmount, fetchCartItems, items] = useCartStore((state) => [
    state.totalAmount,
    state.fetchCartItems,
    state.items,
  ]);
  console.log("items");
  React.useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <div className="mb-2" key={item.id}>
              <CartDrawerItem
                id={item.id}
                quantity={item.quantity}
                details={
                  item.pizzaSize && item.pizzaType
                    ? getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize
                      )
                    : ""
                }
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>
            <Link href={"/cart"}>
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
