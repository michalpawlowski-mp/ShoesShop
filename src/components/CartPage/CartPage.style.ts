import { Link } from "react-router";
import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin: 20px;
    padding: 15px;
  }
`;

export const CartTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1a1a1a;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
`;

export const EmptyCartWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 50px;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
`;

export const EmptyCartInfo = styled.h1`
  color: #000;
  font-size: 1.4rem;
  margin: 20px 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #f58220;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e67616;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f5f5f5;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-right: 0;
  }
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemName = styled.h3`
  font-size: 1.15rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 600;
`;

export const ItemDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const ItemPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  min-width: 100px;
  text-align: right;

  @media (max-width: 480px) {
    text-align: left;
    width: 100%;
    font-size: 1.2rem;
  }
`;

export const Summary = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #1a1a1a;
  display: flex;
  justify-content: flex-end;
`;

export const TotalPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000;
`;
export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #c0392b;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 0;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;
