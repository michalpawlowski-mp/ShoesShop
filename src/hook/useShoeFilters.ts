import { useState, useMemo } from "react";
import { finalShoes } from "../assets/data/dataShoes";

export type Gender = "All" | "Men" | "Women" | "Boy" | "Girl";

export function useShoeFilters() {
  const [gender, setGender] = useState<Gender>("All");
  const [brand, setBrand] = useState<string | "All">("All");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [search, setSearch] = useState("");

  const brands = useMemo(() => Array.from(new Set(finalShoes.map((s) => s.brand))), []);

  const filteredShoes = useMemo(() => {
    return finalShoes.filter((shoe) => {
      const searchLower = search.toLowerCase();

      if (
        search &&
        !shoe.brand.toLowerCase().includes(searchLower) &&
        !shoe.model.toLowerCase().includes(searchLower)
      ) {
        return false;
      }
      if (gender !== "All" && shoe.gender !== gender) return false;
      if (brand !== "All" && shoe.brand !== brand) return false;
      if (maxPrice !== "" && shoe.price > maxPrice) return false;
      if (minPrice !== "" && shoe.price < minPrice) return false;

      return true;
    });
  }, [gender, brand, minPrice, maxPrice, search]);

  return {
    gender,
    setGender,
    brand,
    setBrand,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    search,
    setSearch,
    brands,
    filteredShoes,
  };
}
