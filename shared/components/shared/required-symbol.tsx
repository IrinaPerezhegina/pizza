import * as React from "react";

interface Props {
  className?: string;
}

export const RequiredSymbol: React.FC = () => {
  return <span className="text-red-500">*</span>;
};
