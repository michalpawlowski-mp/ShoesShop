import type { Shoe } from "./shoe";

export type CartItem = {
  shoe: any;
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
  removeFromCart: (shoeModel: string, size: number) => void;
};
