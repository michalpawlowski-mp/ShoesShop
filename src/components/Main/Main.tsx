import React, { useState } from "react";
import Filters from "../Filters/Filters";
import { finalShoes } from "../../assets/data/dataShoes";
import { StyledMain } from "./StyledMain";
import ShoeList from "../ShoeList/ShoeList";

const Main: React.FC = () => {
  const [gender, setGender] = useState<"All" | "Men" | "Women" | "Boy" | "Girl">("All");

  const [brand, setBrand] = useState<string | "All">("All");

  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const brands = Array.from(new Set(finalShoes.map((s) => s.brand)));

  const filteredShoes = finalShoes.filter((shoe) => {
    if (gender !== "All" && shoe.gender !== gender) return false;
    if (brand !== "All" && shoe.brand !== brand) return false;
    if (shoe.price > maxPrice) return false;
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
          brands={brands}
        />
        <ShoeList shoes={filteredShoes} />
      </StyledMain>
    </>
  );
};
export default Main;
