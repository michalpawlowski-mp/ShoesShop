import React from "react";
import {
  FiltersWrapper,
  FilterGroup,
  FilterLabel,
  PriceInputWrapper,
  PriceInput,
  RadioGroup,
  RadioLabel,
  RadioInput,
} from "./StyledFilters";
import { genders } from "../../types/Filters";
import type { FiltersProps } from "../../types/Filters";

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
        <RadioGroup>
          {genders.map((g) => (
            <RadioLabel key={g.value}>
              <RadioInput
                type="radio"
                name="gender"
                value={g.value}
                checked={gender === g.value}
                onChange={() => setGender(g.value)}
              />
              {g.label}
            </RadioLabel>
          ))}
        </RadioGroup>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Marka</FilterLabel>
        <RadioGroup>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="brand"
              value="All"
              checked={brand === "All"}
              onChange={() => setBrand("All")}
            />
            Wszystkie
          </RadioLabel>
          {brands.map((b) => (
            <RadioLabel key={b}>
              <RadioInput
                type="radio"
                name="brand"
                value={b}
                checked={brand === b}
                onChange={() => setBrand(b)}
              />
              {b}
            </RadioLabel>
          ))}
        </RadioGroup>
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
