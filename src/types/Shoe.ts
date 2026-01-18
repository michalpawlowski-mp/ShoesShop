export type Gender = "Men" | "Woman" | "Boy" | "Girl";

export type Shoe = {
  brand: string;
  model: string;
  gender: Gender;
  price: number;
  sizes: number[];
  images: string[];
};

export type CartItem = {
  brand: string;
  model: string;
  price: number;
  image: string;
  size: number;
  quantity: number;
};
