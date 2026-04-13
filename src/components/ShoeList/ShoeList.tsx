import { formatModelName } from "../../tools/formatters";
import * as S from "./ShoeList.style";

import type { Shoe } from "../../types";
import { EmptyWrapper } from "./EmptyWrapper/EmptyWrapper";

type Props = {
  shoes: Shoe[];
};

const ShoeListComponent: React.FC<Props> = ({ shoes }) => {
  if (shoes.length === 0) {
    return <EmptyWrapper />;
  }

  return (
    <S.ShoeList>
      {shoes.map((shoe, index) => (
        <S.ShoeLink
          key={`${shoe.brand}-${shoe.model}-${index}`}
          to={`/${encodeURIComponent(shoe.brand)}/${encodeURIComponent(shoe.model)}`}
        >
          <S.ShoeCard>
            <S.ImgWrapper>
              <S.BlurredBackground $bg={shoe.images[2]} />
              <S.ShoeImage
                src={shoe.images[2]}
                alt={`${shoe.brand} ${shoe.model}`}
              />
            </S.ImgWrapper>
            <S.ShoeName>
              {shoe.brand} {formatModelName(shoe.model)}
            </S.ShoeName>
            <S.ShoeGender>{shoe.gender}</S.ShoeGender>
            <S.ShoePrice>{shoe.price} zł</S.ShoePrice>
          </S.ShoeCard>
        </S.ShoeLink>
      ))}
    </S.ShoeList>
  );
};

export default ShoeListComponent;
