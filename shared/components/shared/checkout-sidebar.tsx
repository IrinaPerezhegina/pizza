import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import * as React from "react";
import { Button } from "../ui";
import { CheckoutItemDetails } from "./checkout-item-details";
import { WhiteBlock } from "./white-block";

interface Props {
  totalAmount: number;
}
const VAT = 15;
const DELIVERY_PRICE = 250;
export const CheckoutSidebar: React.FC<Props> = ({ totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого</span>
        <span className="text-[34px] font-extrabold">{totalPrice} ₽</span>
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={25} className="mr-2 text-gray-300" />
            Стоимость корзины:
          </div>
        }
        value={`${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={25} className="mr-2 text-gray-300" />
            Налоги:
          </div>
        }
        value={`${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={25} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={`${DELIVERY_PRICE} ₽`}
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
  );
};
