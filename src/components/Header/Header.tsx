import { StyledHeader, ShopLogo, Cart, CartIcon, CartCount } from "./Header.style";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import logoSvg from "/logo-horizontal.svg";
import cartSvg from "../../assets/cart.svg";

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StyledHeader>
      <Link to="/">
        <ShopLogo src={logoSvg} alt="ShoesShop logo" title="ShoesShop" />
      </Link>
      <Link to="/cart">
        <Cart>
          <CartIcon src={cartSvg} alt="Koszyk" />
          <CartCount>{totalCount}</CartCount>
        </Cart>
      </Link>
    </StyledHeader>
  );
};

export default Header;
