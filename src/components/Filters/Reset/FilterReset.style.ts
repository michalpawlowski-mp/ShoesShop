import styled from "styled-components";

export const ResetButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 10px;
  font-size: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 1000px) {
    font-size: 12px;
  }
`;
