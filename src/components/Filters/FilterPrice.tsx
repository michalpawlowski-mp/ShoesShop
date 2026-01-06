import React from "react";
import { PriceInputWrapper, FilterLabel, PriceInput } from "./StyledFilters";
import type { FilterPriceProps } from "../../types/Filters";

const FilterPrice: React.FC<FilterPriceProps> = ({
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
}) => {
  return (
    <>
      <PriceInputWrapper>
        <FilterLabel>Cena (zł)</FilterLabel>

        <PriceInput
          type="number"
          min={0}
          placeholder="min"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />

        <PriceInput
          type="number"
          max={1000}
          placeholder="max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </PriceInputWrapper>
    </>
  );
};

export default FilterPrice;
