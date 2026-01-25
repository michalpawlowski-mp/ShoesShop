import { FilterGroup } from "../Filters.styles";
import { ResetButton } from "./FilterReset.style";
import React from "react";
import type { FilterResetProps } from "../../../types/Filters";

const FilterReset: React.FC<FilterResetProps> = ({
  setGender,
  setBrand,
  setMaxPrice,
  setMinPrice,
  setSearch,
}) => {
  const handleReset = () => {
    setSearch("");
    setBrand("All");
    setGender("All");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <FilterGroup>
      <ResetButton onClick={handleReset}>
        <b>X</b> <span>Resetuj filtrowanie</span>
      </ResetButton>
    </FilterGroup>
  );
};

export default FilterReset;
