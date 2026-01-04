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

export const genders: { label: string; value: Gender | "All" }[] = [
  { label: "Wszystkie", value: "All" },
  { label: "Mężczyźni", value: "Men" },
  { label: "Kobiety", value: "Women" },
  { label: "Chłopcy", value: "Boy" },
  { label: "Dziewczynki", value: "Girl" },
];
