"use client";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="ba8c7b4835355fde1829aa9ec73382036d583ff6"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
