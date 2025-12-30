import React from "react";
import {
  FiltersWrapper,
  FilterGroup,
  FilterLabel,
  Select,
  Option,
  PriceInputWrapper,
  PriceInput,
} from "./StyledFilters";
import type { FiltersProps, Gender } from "../../types/Filters";

const Filters: React.FC<FiltersProps> = ({
  gender,
  setGender,
  brand,
  setBrand,
  maxPrice,
  setMaxPrice,
  brands,
}) => {
  return (
    <FiltersWrapper>
      <FilterGroup>
        <FilterLabel>Płeć</FilterLabel>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender | "All")}
        >
          <Option value="All">Wszystkie</Option>
          <Option value="Men">Mężczyźni</Option>
          <Option value="Women">Kobiety</Option>
          <Option value="Boy">Chłopcy</Option>
          <Option value="Girl">Dziewczynki</Option>
        </Select>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Marka</FilterLabel>
        <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <Option value="All">Wszystkie</Option>
          {brands.map((b) => (
            <Option key={b} value={b}>
              {b}
            </Option>
          ))}
        </Select>
      </FilterGroup>
      <PriceInputWrapper>
        <FilterLabel>Maks. cena: {maxPrice} zł</FilterLabel>
        <PriceInput
          type="range"
          min={0}
          max={1000}
          step={10}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </PriceInputWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
