import React from "react";
import { CartStateItem } from "../lib/get-cart-details";
import { CreateCartItemValues } from "../services/dto/cart.dto";
import { useCartStore } from "../store";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const [
    totalAmount,
    items,
    fetchCartItems,
    addCartItem,
    updateItemQuantity,
    removeCartItem,
    loading,
  ] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.fetchCartItems,
    state.addCartItem,
    state.updateItemQuantity,
    state.removeCartItem,
    state.loading,
  ]);

  React.useEffect(() => {
    fetchCartItems();
  }, []);
  return {
    totalAmount,
    items,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  };
};
