export type Gender = "Men" | "Women" | "Boy" | "Girl";

export interface FiltersProps {
  gender: Gender | "All";
  setGender: (g: Gender | "All") => void;
  brand: string | "All";
  setBrand: (b: string | "All") => void;
  maxPrice: number;
  setMaxPrice: (p: number) => void;
  brands: string[];
}
