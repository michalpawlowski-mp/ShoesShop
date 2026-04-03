import type { Shoe } from "./shoe";

export type CartItem = {
  brand: string;
  model: string;
  price: number;
  image: string;
  size: number;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (shoe: Shoe, size: number) => void;
  removeFromCart: (model: string, size: number) => void;
  updateQuantity: (model: string, size: number, newQuantity: number) => void;
};
