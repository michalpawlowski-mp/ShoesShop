import type { Gender } from "./shoe";

export type GenderFilterValue = "All" | Gender;

export type PriceValue = number | "";

export interface FilterGenderProps {
  gender: GenderFilterValue;
  setGender: (g: GenderFilterValue) => void;
}

export interface FilterBrandProps {
  brand: string | "All";
  setBrand: (b: string | "All") => void;
  brands: string[];
}

export interface FilterPriceProps {
  minPrice: PriceValue;
  setMinPrice: (p: PriceValue) => void;
  maxPrice: PriceValue;
  setMaxPrice: (p: PriceValue) => void;
}

export interface FilterSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export type FilterResetProps = Pick<
  FiltersProps,
  "setGender" | "setBrand" | "setSearch" | "setMinPrice" | "setMaxPrice"
>;

export interface FiltersProps
  extends FilterGenderProps, FilterBrandProps, FilterPriceProps, FilterSearchProps {}
