import React, { useState } from "react";
import Filters from "../Filters/Filters";
import { finalShoes } from "../../assets/data/dataShoes";
import { StyledMain } from "./StyledMain";
import ShoeList from "../ShoeList/ShoeList";

const Main: React.FC = () => {
  const [gender, setGender] = useState<"All" | "Men" | "Women" | "Boy" | "Girl">("All");

  const [brand, setBrand] = useState<string | "All">("All");

  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const brands = Array.from(new Set(finalShoes.map((s) => s.brand)));

  const filteredShoes = finalShoes.filter((shoe) => {
    if (gender !== "All" && shoe.gender !== gender) return false;
    if (brand !== "All" && shoe.brand !== brand) return false;
    if (maxPrice !== "" && shoe.price > maxPrice) return false;
    if (minPrice !== "" && shoe.price < minPrice) return false;
    return true;
  });

  return (
    <>
      <StyledMain>
        <Filters
          gender={gender}
          setGender={setGender}
          brand={brand}
          setBrand={setBrand}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          brands={brands}
        />
        <ShoeList shoes={filteredShoes} />
      </StyledMain>
    </>
  );
};
export default Main;
