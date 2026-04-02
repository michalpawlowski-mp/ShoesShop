import * as S from "./ShoeInfo.styles";
import { formatModelName } from "../../../tools/formatters";
import type { ShoeInfoProps } from "../../../types";

const ShoeInfo: React.FC<ShoeInfoProps> = ({ shoe, selectedSize, onSelectSize }) => {
  return (
    <S.InfoWrapper>
      <div>
        <div>
          <S.ShoeTitle>
            {shoe.brand} {formatModelName(shoe.model)}
          </S.ShoeTitle>
          <S.ShoeGender>Płeć: {shoe.gender}</S.ShoeGender>
        </div>
        <S.ShoePrice>Cena: {shoe.price} zł</S.ShoePrice>
      </div>
      <S.SizesWrapper>
        <p>Wybierz rozmiar:</p>
        {shoe.sizes.map((size) => (
          <S.SizeButton
            key={size}
            selected={size === selectedSize}
            onClick={() => onSelectSize(size)}
          >
            {size}
          </S.SizeButton>
        ))}
      </S.SizesWrapper>
    </S.InfoWrapper>
  );
};

export default ShoeInfo;
