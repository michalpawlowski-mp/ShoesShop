import React from "react";
import { StyledFilters, FiltersWrapper } from "./Filters.styles";
import FilterGender from "./Gender/FilterGender";
import FilterBrand from "./Brand/FilterBrand";
import FilterPrice from "./Price/FilterPrice";
import type { FiltersProps } from "../../types/Filters";
import FilterSearch from "./Search/FilterSearch";
import FilterReset from "./Reset/FilterReset";

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
  const hasActiveFilters =
    search !== "" ||
    brand !== "All" ||
    gender !== "All" ||
    minPrice !== "" ||
    maxPrice !== "";
  return (
    <StyledFilters>
      <FiltersWrapper>
        {hasActiveFilters && (
          <FilterReset
            setSearch={setSearch}
            setBrand={setBrand}
            setGender={setGender}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        )}

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
    </StyledFilters>
  );
};

export default Filters;
