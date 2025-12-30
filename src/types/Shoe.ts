export type Gender = "Men" | "Woman" | "Boy" | "Girl";

export type Shoe = {
  brand: string;
  model: string;
  gender: Gender;
  price: number;
  sizes: number[];
  images: string[];
};
