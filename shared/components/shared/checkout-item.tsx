import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import React from "react";
import { CartItemDetailsCountButton } from "./cart-item-details/cart-item-details-count-button";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CartItemInfo } from "./cart-item-details/cart-item-info";

export interface Props extends CartItemProps {
  onClickRemove?: () => void;
  onClickCountButton?: (type: "plus" | "minus") => void;
  className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
  className,
  imageUrl,
  details,
  name,
  price,
  disabled,
  quantity,
  onClickRemove,
  onClickCountButton,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>
      <CartItemDetailsPrice value={price} />
      <div className="flex items-center gap-5 ml-20">
        <CartItemDetailsCountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button type="button" onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
