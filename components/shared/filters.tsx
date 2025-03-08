import * as React from "react";
import { Input } from "../ui";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="12" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3"> Цена от до:</p>
        <Input
          type="number"
          placeholder="0"
          min={0}
          max={30000}
          defaultValue={0}
        />
        <Input type="number" placeholder="30000" min={100} max={30000} />
      </div>
    </div>
  );
};
// 1:14:21
