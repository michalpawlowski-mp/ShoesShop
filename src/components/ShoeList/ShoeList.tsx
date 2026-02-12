import { formatModelName } from "../../tools/formatters";
import {
  ShoeList,
  ShoeLink,
  ShoeCard,
  ImgWrapper,
  BlurredBackground,
  ShoeImage,
  ShoeName,
  ShoeGender,
  ShoePrice,
  EmptyStateWrapper,
  IconCircle,
  Title,
  Subtitle,
} from "./ShoeList.style";

type Props = {
  shoes: typeof import("../../assets/data/dataShoes").finalShoes;
};

const ShoeListComponent: React.FC<Props> = ({ shoes }) => {
  if (shoes.length === 0) {
    return (
      <EmptyStateWrapper>
        <IconCircle>👟</IconCircle>
        <Title>Brak produktów spełniających wybrane kryteria</Title>
        <Subtitle>
          Niestety nie znaleźliśmy tego, czego szukasz. Spróbuj zmienić filtry lub wpisać
          inną frazę.
        </Subtitle>
      </EmptyStateWrapper>
    );
  }

  return (
    <ShoeList>
      {shoes.map((shoe, index) => (
        <ShoeLink
          key={`${shoe.brand}-${shoe.model}-${index}`}
          to={`/${encodeURIComponent(shoe.brand)}/${encodeURIComponent(shoe.model)}`}
        >
          <ShoeCard>
            <ImgWrapper>
              <BlurredBackground $bg={shoe.images[2]} />
              <ShoeImage src={shoe.images[2]} alt={`${shoe.brand} ${shoe.model}`} />
            </ImgWrapper>
            <ShoeName>
              {shoe.brand} {formatModelName(shoe.model)}
            </ShoeName>
            <ShoeGender>{shoe.gender}</ShoeGender>
            <ShoePrice>{shoe.price} zł</ShoePrice>
          </ShoeCard>
        </ShoeLink>
      ))}
    </ShoeList>
  );
};

export default ShoeListComponent;
