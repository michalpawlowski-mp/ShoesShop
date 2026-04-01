import { AddToCartButton } from "./AddToCart.styles";
import type { AddToCartProps } from "../../../types";

const AddToCart: React.FC<AddToCartProps> = ({ shoe, selectedSize, onAdd }) => {
  return (
    <AddToCartButton
      disabled={!selectedSize}
      onClick={() => {
        if (!selectedSize) return;
        onAdd(shoe, selectedSize);
      }}
    >
      Dodaj do koszyka
    </AddToCartButton>
  );
};

export default AddToCart;
