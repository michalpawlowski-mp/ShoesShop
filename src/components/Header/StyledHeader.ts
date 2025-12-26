import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopLogo = styled.img`
  height: 75px;
  margin: 5px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const CartLabel = styled.span`
  font-size: 10px;
  color: #333131ff;
`;

export const CartCount = styled.span`
  background-color: red;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
`;
