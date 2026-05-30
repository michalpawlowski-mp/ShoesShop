import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 16px;
`;

export const CartWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  height: max-content;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 12px;
  border: 0.5px solid #e0e0e0;
  padding: 28px 32px;
`;

export const CartTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text};
  padding-bottom: 16px;
  border-bottom: 0.5px solid ${({ theme }) => theme.border};
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 8px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const ItemName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 2px;
  color: ${({ theme }) => theme.text};
`;

export const ItemDetails = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  margin: 0 0 10px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  overflow: hidden;
  width: fit-content;
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  min-width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  border-left: 0.5px solid ${({ theme }) => theme.border};
  border-right: 0.5px solid ${({ theme }) => theme.border};
`;

export const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const ItemPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  flex-shrink: 0;
  min-width: 80px;
  text-align: right;

  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 0.5px solid ${({ theme }) => theme.border};
`;

export const ItemCount = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
`;

export const TotalPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 13px;
  background: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c96100;
  }

  &:active {
    background: #ff7a00;
  }
`;
