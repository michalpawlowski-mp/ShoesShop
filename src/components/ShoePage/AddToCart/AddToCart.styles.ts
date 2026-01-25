import styled from "styled-components";

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  background-color: #ff7a00;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #e96f00;
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(255, 122, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    padding: 18px;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    padding: 18px;
    font-size: 1.2rem;
    position: sticky;
    bottom: 32px;
  }
`;
