"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import * as React from "react";
import { useIntersection } from "react-use";
import { ProductCard } from "./product-card";
import { Title } from "./title";
interface Props {
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            id={product.id}
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.vatiants[0].price}
          />
        ))}
      </div>
    </div>
  );
};
