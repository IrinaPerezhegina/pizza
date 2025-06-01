import { CartDTO } from "./dto/cart.dto";
import { axiosInstance } from "./instance";

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};

export const updateItemQuantity = async (
  id: number,
  quantity: number
): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>("/cart/" + id, {
    quantity,
  });
  return data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>("/cart/" + id);
  return data;
};
