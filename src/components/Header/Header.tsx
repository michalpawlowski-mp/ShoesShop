import {
  StyledHeader,
  ShopLogo,
  Cart,
  CartIcon,
  CartCount,
} from "./StyledHeader";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <ShopLogo
            src="./logo-horizontal.svg"
            alt="ShoesShop logo"
            title="ShoesShop"
          />
        </Link>
        <Cart>
          <CartIcon src={"src/assets/cart.svg"} alt="Koszyk" />
          <CartCount>0</CartCount>
        </Cart>
      </StyledHeader>
    </>
  );
};

export default Header;
