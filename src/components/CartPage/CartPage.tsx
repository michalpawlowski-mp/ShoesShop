import { useCart } from "../Context/CartContext";
import {
  CartContainer,
  CartWrapper,
  CartTitle,
  EmptyCartWrapper,
  EmptyCartInfo,
  StyledLink,
  CartItem,
  CartItemInfo,
  ItemName,
  ItemDetails,
  ItemPrice,
  RemoveButton,
  Summary,
  TotalPrice,
  ItemImage,
} from "./CartPage.style";
import { formatModelName } from "../../tools/formatters";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.shoe.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <EmptyCartWrapper>
        <EmptyCartInfo>Koszyk jest pusty.</EmptyCartInfo>
        <StyledLink to="/">Powrót do strony głownej</StyledLink>
      </EmptyCartWrapper>
    );
  }

  return (
    <CartContainer>
      <CartWrapper>
        <CartTitle>Koszyk</CartTitle>
        {cartItems.map((item) => (
          <CartItem key={`${item.shoe.model}-${item.size}`}>
            <ItemImage
              src={item.shoe.images[0]}
              alt={`${item.shoe.brand} ${item.shoe.model}`}
            />
            <CartItemInfo>
              <ItemName>
                {item.shoe.brand} {formatModelName(item.shoe.model)}
              </ItemName>
              <ItemDetails>Rozmiar: {item.size}</ItemDetails>
              <ItemDetails>Ilość: {item.quantity}</ItemDetails>
              <RemoveButton onClick={() => removeFromCart(item.shoe.model, item.size)}>
                Usuń
              </RemoveButton>
            </CartItemInfo>
            <ItemPrice>{item.shoe.price * item.quantity} zł</ItemPrice>
          </CartItem>
        ))}
        <Summary>
          <TotalPrice>Suma: {totalPrice} zł</TotalPrice>
        </Summary>
      </CartWrapper>
    </CartContainer>
  );
};

export default CartPage;
