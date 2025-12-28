import React, { useState } from "react";
import ShoeModal from "./ShoeModal";
import {
  StyledMain,
  Shoe,
  ImgWrapper,
  NameShoes,
  Gender,
  Price,
} from "./StyledMain";
import { finalShoes } from "../../assets/data/dataShoes";
import { formatModelName } from "../../tools/formatters";

const Main: React.FC = () => {
  const [selectedShoe, setSelectedShoe] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledMain>
        {finalShoes.map((shoe, index) => (
          <Shoe
            key={index}
            onClick={() => {
              setSelectedShoe(shoe);
              setIsOpen(true);
            }}
          >
            <ImgWrapper>
              <img src={shoe.images[2]} alt={`${shoe.brand} ${shoe.model}`} />
            </ImgWrapper>
            <NameShoes>
              {shoe.brand === "NewBalance" ? "New Balance" : shoe.brand}{" "}
              {formatModelName(shoe.model, shoe.brand)}
            </NameShoes>
            <Gender>{shoe.gender}</Gender>
            <Price>{shoe.price} zł</Price>
          </Shoe>
        ))}
      </StyledMain>
      {isOpen && selectedShoe && (
        <ShoeModal shoe={selectedShoe} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Main;
