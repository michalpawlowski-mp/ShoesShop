import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";
import { finalShoes } from "../../assets/data/dataShoes";
import { formatModelName } from "../../tools/formatters";
import {
  StyledMain,
  Shoe,
  ImgWrapper,
  BlurredBackground,
  ImgShoe,
  NameShoes,
  Gender,
  Price,
} from "./StyledMain";

const Main: React.FC = () => {
  const [gender, setGender] = useState<
    "All" | "Men" | "Women" | "Boy" | "Girl"
  >("All");
  const [brand, setBrand] = useState<string | "All">("All");
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const brands = Array.from(new Set(finalShoes.map((s) => s.brand)));

  const filteredShoes = finalShoes.filter((shoe) => {
    if (gender !== "All" && shoe.gender !== gender) return false;
    if (brand !== "All" && shoe.brand !== brand) return false;
    if (shoe.price > maxPrice) return false;
    return true;
  });

  return (
    <>
      <Filters
        gender={gender}
        setGender={setGender}
        brand={brand}
        setBrand={setBrand}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        brands={brands}
      />

      <StyledMain>
        {filteredShoes.map((shoe) => (
          <Link
            key={`${shoe.brand}-${shoe.model}`}
            to={`/${shoe.brand}/${shoe.model}`}
            style={{ textDecoration: "none" }}
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
          </Link>
        ))}
      </StyledMain>
    </>
  );
};

export default Main;
