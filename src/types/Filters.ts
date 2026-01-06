export type Gender = "Men" | "Women" | "Boy" | "Girl";

export type GenderFilterValue = Gender | "All";

export interface FilterGenderProps {
  gender: GenderFilterValue;
  setGender: (g: GenderFilterValue) => void;
}

export interface FilterBrandProps {
  brand: string | "All";
  setBrand: (b: string | "All") => void;
  brands: string[];
}

export type PriceValue = number | "";

export interface FilterPriceProps {
  minPrice: PriceValue;
  setMinPrice: (p: PriceValue) => void;
  maxPrice: PriceValue;
  setMaxPrice: (p: PriceValue) => void;
}

export interface FiltersProps
  extends FilterGenderProps,
    FilterBrandProps,
    FilterPriceProps {}

export const genders: { label: string; value: Gender | "All" }[] = [
  { label: "Wszystkie", value: "All" },
  { label: "Mężczyźni", value: "Men" },
  { label: "Kobiety", value: "Women" },
  { label: "Chłopcy", value: "Boy" },
  { label: "Dziewczynki", value: "Girl" },
];
