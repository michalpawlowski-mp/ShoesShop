import { useCart } from "../Context/CartContext";
import * as S from "./CartPage.style";
import { formatModelName } from "../../tools/formatters";
import { EmptyCart } from "./EmptyCart/EmptyCart";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const pluralForm = (count: number) => {
    if (count === 1) return "produkt";
    if (count >= 2 && count <= 4) return "produkty";
    return "produktów";
  };

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

              <S.QuantityRow>
                <S.QuantityWrapper>
                  <S.QuantityButton
                    onClick={() =>
                      updateQuantity(item.model, item.size, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    −
                  </S.QuantityButton>
                  <S.QuantityValue>{item.quantity}</S.QuantityValue>
                  <S.QuantityButton
                    onClick={() =>
                      updateQuantity(item.model, item.size, item.quantity + 1)
                    }
                  >
                    +
                  </S.QuantityButton>
                </S.QuantityWrapper>

                <S.RemoveButton onClick={() => removeFromCart(item.model, item.size)}>
                  Usuń
                </S.RemoveButton>
              </S.QuantityRow>
            </S.CartItemInfo>

            <S.ItemPrice>{item.price * item.quantity} zł</S.ItemPrice>
          </S.CartItem>
        ))}

        <S.Summary>
          <S.ItemCount>
            {itemCount} {pluralForm(itemCount)}
          </S.ItemCount>
          <S.TotalPrice>Suma: {totalPrice} zł</S.TotalPrice>
        </S.Summary>

        <S.CheckoutButton>Przejdź do kasy</S.CheckoutButton>
      </S.CartWrapper>
    </S.CartContainer>
  );
};

export default CartPage;
