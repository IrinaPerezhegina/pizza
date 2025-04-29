"use client";

import { Dialog } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { DialogContent, Title } from "@radix-ui/react-dialog";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <Title>{product.name}</Title>
      </DialogContent>
    </Dialog>
  );
};
