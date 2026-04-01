import { useCart } from "../Context/CartContext";
import * as S from "./CartPage.style";
import { formatModelName } from "../../tools/formatters";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.shoe.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <S.EmptyCartWrapper>
        <S.EmptyCartInfo>Koszyk jest pusty.</S.EmptyCartInfo>
        <S.StyledLink to="/">Powrót do strony głownej</S.StyledLink>
      </S.EmptyCartWrapper>
    );
  }

  return (
    <S.CartContainer>
      <S.CartWrapper>
        <S.CartTitle>Koszyk</S.CartTitle>
        {cartItems.map((item) => (
          <S.CartItem key={`${item.shoe.model}-${item.size}`}>
            <S.ItemImage
              src={item.shoe.images[0]}
              alt={`${item.shoe.brand} ${item.shoe.model}`}
            />
            <S.CartItemInfo>
              <S.ItemName>
                {item.shoe.brand} {formatModelName(item.shoe.model)}
              </S.ItemName>
              <S.ItemDetails>Rozmiar: {item.size}</S.ItemDetails>
              <S.ItemDetails>Ilość: {item.quantity}</S.ItemDetails>
              <S.RemoveButton
                onClick={() => removeFromCart(item.shoe.model, item.size)}
              >
                Usuń
              </S.RemoveButton>
            </S.CartItemInfo>
            <S.ItemPrice>{item.shoe.price * item.quantity} zł</S.ItemPrice>
          </S.CartItem>
        ))}
        <S.Summary>
          <S.TotalPrice>Suma: {totalPrice} zł</S.TotalPrice>
        </S.Summary>
      </S.CartWrapper>
    </S.CartContainer>
  );
};

export default CartPage;
