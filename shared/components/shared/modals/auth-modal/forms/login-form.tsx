import { Button } from "@/shared/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../../form";
import { Title } from "../../../title";
import { formLoginSchema, TFormLoginValues } from "./schemas";

interface Props {
  onClose?: VoidFunction;
  className?: string;
}

export const LoginForm: React.FC<Props> = ({ onClose, className }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 20:37:10
  const onSubmit = (data: TFormLoginValues) => {
    try {
    } catch (error) {}
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Вход в аккаунт" size="md" className="font-bold" />

            <p className="text-gray-400">
              Введите свою почту,чтобы войти в свой аккаунт
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" type="password" label="Пароль" required />
        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
