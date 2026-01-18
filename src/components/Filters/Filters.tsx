import React from "react";
import { FiltersWrapper } from "./Filters.styles";
import FilterGender from "./Gender/FilterGender";
import FilterBrand from "./Brand/FilterBrand";
import FilterPrice from "./Price/FilterPrice";
import type { FiltersProps } from "../../types/Filters";
import FilterSearch from "./Search/FilterSearch";

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
  search,
  setSearch,
}) => {
  return (
    <FiltersWrapper>
      <FilterSearch search={search} setSearch={setSearch} />
      <FilterBrand brand={brand} setBrand={setBrand} brands={brands} />
      <FilterGender gender={gender} setGender={setGender} />
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
