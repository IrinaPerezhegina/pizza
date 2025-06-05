import { cn } from "@/shared/lib/utils";
import * as React from "react";
import { Title } from "./title";

interface Props {
  className?: string;
  title?: string;
  countentClassName?: string;
  endAdornment?: React.ReactNode;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  countentClassName,
  title,
  children,
  endAdornment,
}) => {
  return (
    <div className={cn("bg-white rounded-3xl", className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}
      <div className={cn("px-5 py-4", countentClassName)}>{children}</div>
    </div>
  );
};
