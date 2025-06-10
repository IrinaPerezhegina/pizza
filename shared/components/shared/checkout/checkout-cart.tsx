import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import * as React from "react";
import { CheckoutItem } from "../checkout-item";
import { WhiteBlock } from "../white-block";

interface Props {
  items: CartStateItem[];
  className?: string;
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  className,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            details={getCartItemDetails(
              item.ingredients,
              item.pizzaType as PizzaType,
              item.pizzaSize as PizzaSize
            )}
            name={item.name}
            disabled={item.disabled}
            price={item.price}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItem(item.id)}
            quantity={item.quantity}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};
