import React from "react";
import { FilterGroup, FilterLabel, PriceInput } from "../Filters.styles";
import type { FilterPriceProps } from "../../../types/Filters";

const FilterPrice: React.FC<FilterPriceProps> = ({
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
}) => {
  return (
    <>
      <FilterGroup>
        <FilterLabel>Cena (zł)</FilterLabel>
        <PriceInput
          type="number"
          min={0}
          placeholder="min."
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <PriceInput
          type="number"
          max={1000}
          placeholder="max."
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FilterGroup>
    </>
  );
};

export default FilterPrice;
