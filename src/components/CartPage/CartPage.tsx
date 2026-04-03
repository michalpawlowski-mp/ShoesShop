import { useCart } from "../Context/CartContext";
import * as S from "./CartPage.style";
import { formatModelName } from "../../tools/formatters";
import { EmptyCart } from "./EmptyCart/EmptyCart";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <S.CartContainer>
      <S.CartWrapper>
        <S.CartTitle>Koszyk</S.CartTitle>
        {cartItems.map((item) => (
          <S.CartItem key={`${item.model}-${item.size}`}>
            <S.ItemImage src={item.image} alt={`${item.brand} ${item.model}`} />
            <S.CartItemInfo>
              <S.ItemName>
                {item.brand} {formatModelName(item.model)}
              </S.ItemName>
              <S.ItemDetails>Rozmiar: {item.size}</S.ItemDetails>
              <S.ItemDetails>
                Ilość:
                <S.QuantityButton
                  onClick={() => updateQuantity(item.model, item.size, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </S.QuantityButton>
                {item.quantity}
                <S.QuantityButton
                  onClick={() => updateQuantity(item.model, item.size, item.quantity + 1)}
                >
                  +
                </S.QuantityButton>
              </S.ItemDetails>
              <S.RemoveButton onClick={() => removeFromCart(item.model, item.size)}>
                Usuń
              </S.RemoveButton>
            </S.CartItemInfo>
            <S.ItemPrice>{item.price * item.quantity} zł</S.ItemPrice>
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
