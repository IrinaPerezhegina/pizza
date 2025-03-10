import * as React from "react";
import { Input } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";

interface Props {
  className?: string;
}
const defaultItems = [
  {
    text: "Сырный соус",
    value: "1",
  },
  {
    text: "Моццарелла",
    value: "2",
  },
  {
    text: "Чеснок",
    value: "3",
  },
];
const items = [
  {
    text: "Сырный соус",
    value: "1",
  },
  {
    text: "Моццарелла",
    value: "2",
  },
  {
    text: "Чеснок",
    value: "3",
  },
  {
    text: "Соленые огурчики",
    value: "4",
  },
  {
    text: "Красный лук",
    value: "5",
  },
  {
    text: "Томаты",
    value: "6",
  },
];
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="12" />
      </div>
      {/* Фильтр цен*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3"> Цена от до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider step={10} min={0} max={1000} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        items={items}
        limit={3}
        defaultItems={defaultItems}
        classname="mt-5"
      />
    </div>
  );
};
