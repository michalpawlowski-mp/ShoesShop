import React from "react";
import { FiltersWrapper } from "./StyledFilters";
import FilterGender from "./FilterGender";
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import type { FiltersProps } from "../../types/Filters";

const Filters: React.FC<FiltersProps> = ({
  gender,
  setGender,
  brand,
  setBrand,
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
  brands,
}) => {
  return (
    <FiltersWrapper>
      <FilterGender gender={gender} setGender={setGender} />
      <FilterBrand brand={brand} setBrand={setBrand} brands={brands} />
      <FilterPrice
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
      />
    </FiltersWrapper>
  );
};

export default Filters;
