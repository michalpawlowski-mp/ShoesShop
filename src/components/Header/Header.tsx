import {
  StyledHeader,
  ShopLogo,
  Cart,
  CartIcon,
  CartCount,
  ThemeToggle,
  Wrapper,
} from "./Header.style";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import logoSvg from "/logo-horizontal.svg";
import cartSvg from "../../assets/images/cart.svg";

interface HeaderProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDark }) => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StyledHeader>
      <Link to="/">
        <ShopLogo src={logoSvg} alt="ShoesShop logo" title="ShoesShop" />
      </Link>
      <Wrapper>
        <ThemeToggle type="button" onClick={onToggleTheme} style={{ margin: "auto" }}>
          {isDark ? "☀️" : "🌙"}
        </ThemeToggle>
        <Link to="/cart">
          <Cart>
            <CartIcon src={cartSvg} alt="Koszyk" />
            <CartCount>{totalCount}</CartCount>
          </Cart>
        </Link>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
