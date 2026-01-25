import { AddToCartButton } from "./AddToCart.styles";
import type { Shoe } from "../../../types/Shoe";

interface AddToCartProps {
  shoe: Shoe;
  selectedSize: number | null;
  onAdd: (shoe: Shoe, size: number) => void;
}

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
