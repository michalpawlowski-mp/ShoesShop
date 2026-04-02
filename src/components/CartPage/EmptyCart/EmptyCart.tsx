import { EmptyCartInfo, EmptyCartWrapper, StyledLink } from "./EmptyCart.style";

export const EmptyCart: React.FC = () => {
  return (
    <EmptyCartWrapper>
      <EmptyCartInfo>Koszyk jest pusty.</EmptyCartInfo>
      <StyledLink to="/">Powrót do strony głownej</StyledLink>
    </EmptyCartWrapper>
  );
};
