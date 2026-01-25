import styled from "styled-components";

export const StyledFilters = styled.div`
  height: 100%;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 15px 0px 15px 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #333;
  flex-shrink: 0;
  height: max-content;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const RadioInput = styled.input`
  cursor: pointer;
`;

export const PriceInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    border-color: #111;
    box-shadow: 0 0 0 1px #111;
  }

  &::placeholder {
    color: #aaa;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SearchInput = styled(PriceInput)``;
