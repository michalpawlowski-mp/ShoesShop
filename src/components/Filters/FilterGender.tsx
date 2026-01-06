import {
  FilterGroup,
  FilterLabel,
  RadioGroup,
  RadioLabel,
  RadioInput,
} from "./StyledFilters";
import { genders } from "../../types/Filters";
import type { FilterGenderProps } from "../../types/Filters";

const FilterGender: React.FC<FilterGenderProps> = ({ gender, setGender }) => {
  return (
    <>
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
    </>
  );
};

export default FilterGender;
