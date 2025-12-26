import {
  StyledHeader,
  ShopLogo,
  Cart,
  CartIcon,
  CartLabel,
  CartCount,
} from "./StyledHeader";

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <ShopLogo
          src={"./logo-horizontal.svg"}
          alt="ShoesShop logo"
          title="ShoesShop"
        />
        <Cart>
          <CartIcon src={"src/assets/cart.svg"} alt="Koszyk" />
          <CartLabel>Koszyk</CartLabel>
          <CartCount>0</CartCount>
        </Cart>
      </StyledHeader>
    </>
  );
};

export default Header;
