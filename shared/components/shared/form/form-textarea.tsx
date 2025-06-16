"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../ui";
import { ClearButton } from "../clear-button";
import { ErrorText } from "../error-text";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  className: string;
}

export const FormTextarea: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const text = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>

      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {Boolean(text) && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
