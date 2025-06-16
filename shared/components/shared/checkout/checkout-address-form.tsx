"use client";

import * as React from "react";
import { Input, Textarea } from "../../ui";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
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
  );
};
