export type Gender = "Men" | "Women" | "Boy" | "Girl";

export type Shoe = {
  brand: string;
  model: string;
  gender: Gender;
  price: number;
  sizes: number[];
  images: string[];
};
