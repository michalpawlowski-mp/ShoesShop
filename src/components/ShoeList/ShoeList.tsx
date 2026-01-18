import { formatModelName } from "../../tools/formatters";
import {
  StyledShoeList,
  Shoe,
  ImgWrapper,
  BlurredBackground,
  ImgShoe,
  NameShoes,
  Gender,
  Price,
  StyledLink,
} from "./ShoeList.style";

type Props = {
  shoes: typeof import("../../assets/data/dataShoes").finalShoes;
};

const ShoeList: React.FC<Props> = ({ shoes }) => {
  return (
    <StyledShoeList>
      {shoes.map((shoe) => (
        <StyledLink
          key={`${shoe.brand}-${shoe.model}`}
          to={`/${shoe.brand}/${shoe.model}`}
        >
          <Shoe>
            <ImgWrapper>
              <BlurredBackground $bg={shoe.images[2]} />
              <ImgShoe src={shoe.images[2]} alt={shoe.model} />
            </ImgWrapper>
            <NameShoes>
              {shoe.brand} {formatModelName(shoe.model)}
            </NameShoes>
            <Gender>{shoe.gender}</Gender>
            <Price>{shoe.price} zł</Price>
          </Shoe>
        </StyledLink>
      ))}
    </StyledShoeList>
  );
};

export default ShoeList;
