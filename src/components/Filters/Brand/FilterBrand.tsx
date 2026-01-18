import type { FilterBrandProps } from "../../../types/Filters";
import {
  FilterGroup,
  FilterLabel,
  RadioGroup,
  RadioLabel,
  RadioInput,
} from "../Filters.styles";

const FilterBrand: React.FC<FilterBrandProps> = ({ brand, setBrand, brands }) => {
  return (
    <>
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
    </>
  );
};

export default FilterBrand;
