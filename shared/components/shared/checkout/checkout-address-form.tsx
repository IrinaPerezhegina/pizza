"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AddressInput } from "../address-input";
import { ErrorText } from "../error-text";
import { FormTextarea } from "../form";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Адес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />

        <FormTextarea
          name="comment"
          placeholder="Комментарий к заказу"
          rows={5}
          className="text-base"
        />
      </div>
    </WhiteBlock>
  );
};
