import styled from "styled-components";

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 14px;
  border: none;
  background: #ff7a00;
  color: #fff;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    background: #e96f00;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 122, 0, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    background: #e8e8e8;
    color: #aaa;
    cursor: not-allowed;
  }

  @media (min-width: 1024px) {
    padding: 18px 24px;
    font-size: 1.1rem;
    position: sticky;
    bottom: 24px;
  }
`;
