import {
  InfoWrapper,
  ShoeTitle,
  ShoeGender,
  ShoePrice,
  SizesWrapper,
  SizeButton,
} from "./SheoInfo.styles";
import { formatModelName } from "../../../tools/formatters";
import type { Shoe } from "../../../types/Shoe";

interface ShoeInfoProps {
  shoe: Shoe;
  selectedSize: number | null;
  onSelectSize: (size: number) => void;
}

const ShoeInfo: React.FC<ShoeInfoProps> = ({ shoe, selectedSize, onSelectSize }) => {
  return (
    <InfoWrapper>
      <div>
        <ShoeTitle>
          {shoe.brand} {formatModelName(shoe.model)}
        </ShoeTitle>
        <ShoeGender>Płeć: {shoe.gender}</ShoeGender>
      </div>
      <ShoePrice>Cena: {shoe.price} zł</ShoePrice>
      <SizesWrapper>
        <p>Wybierz rozmiar:</p>
        {shoe.sizes.map((size) => (
          <SizeButton
            key={size}
            selected={size === selectedSize}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </SizesWrapper>
    </InfoWrapper>
  );
};

export default ShoeInfo;
