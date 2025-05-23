import { pizzaSizes } from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<React.PropsWithChildren<Props>> = ({
  imageUrl,
  name,
  className,
  ingredients,
  items,
  onClickAdd,
}) => {
  const textDetails = "30 см, традиционное тесто 30";
  const totalPrice = 500;
  const size = 30;
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants items={pizzaSizes} selectedValue="" />

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
// 9:14:00
