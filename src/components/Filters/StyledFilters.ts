import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  background-color: #f8f8f8;
  padding: 15px 20px;
  border-radius: 12px;
  margin: 15px 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

export const Option = styled.option``;

export const PriceInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceInput = styled.input`
  margin-top: 5px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 5px;
  background: #ddd;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #333;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    background: #555;
  }
`;
