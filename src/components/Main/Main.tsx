import React from "react";
import Filters from "../Filters/Filters";
import { StyledMain } from "./Main.style";
import ShoeList from "../ShoeList/ShoeList";
import { useShoeFilters } from "../../hook/useShoeFilters";

const Main: React.FC = () => {
  const {
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
  } = useShoeFilters();

  return (
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
        search={search}
        setSearch={setSearch}
      />
      <ShoeList shoes={filteredShoes} />
    </StyledMain>
  );
};

export default Main;
