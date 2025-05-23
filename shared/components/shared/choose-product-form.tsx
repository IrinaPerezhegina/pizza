import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<React.PropsWithChildren<Props>> = ({
  imageUrl,
  name,
  className,

  onClickAdd,
}) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 500;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div
        className={"flex items-center justify-center flex-1 relative w-full"}
      >
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button
          // loading={loading}
          // onClick={}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в карзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
