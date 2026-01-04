import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto 5px;
  padding: 15px;
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

export const FilterLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Option = styled.option``;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`;

export const RadioInput = styled.input`
  cursor: pointer;
`;

export const PriceInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PriceInput = styled.input`
  width: 100%;
`;
