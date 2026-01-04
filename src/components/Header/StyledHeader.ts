import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(72, 72, 72, 1);
  -moz-box-shadow: 0px 0px 4px 0px rgba(72, 72, 72, 1);
  box-shadow: 0px 0px 4px 0px rgba(72, 72, 72, 1);
`;

export const ShopLogo = styled.img`
  height: 75px;
  margin: 5px;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CartIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CartCount = styled.span`
  background-color: gray;
  width: 15px;
  height: 15px;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
