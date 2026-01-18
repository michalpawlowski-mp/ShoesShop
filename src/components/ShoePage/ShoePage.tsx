import { useState } from "react";
import { useParams } from "react-router-dom";
import { finalShoes } from "../../assets/data/dataShoes";
import { formatModelName } from "../../tools/formatters";
import type { Shoe } from "../../types/Shoe";
import {
  ShoePageWrapper,
  ImagesWrapper,
  Thumbnails,
  Thumbnail,
  MainImage,
  InfoWrapper,
  ShoeTitle,
  ShoeInfo,
  ShoePrice,
  SizesWrapper,
  SizeButton,
  AddToCartButton,
} from "./ShoePage.style";
import { useCart } from "../Context/CartContext";

const ShoePage = () => {
  const { addToCart } = useCart();
  const { model } = useParams<"model">();
  const shoe: Shoe | undefined = finalShoes.find((s) => s.model === model);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  if (!shoe) {
    return <h2>Nie znaleziono produktu</h2>;
  }

  return (
    <ShoePageWrapper>
      <ImagesWrapper>
        <MainImage src={shoe.images[selectedImage]} alt={shoe.model} />
        <Thumbnails>
          {shoe.images.map((img, i) => (
            <Thumbnail
              key={img}
              src={img}
              selected={i === selectedImage}
              onClick={() => setSelectedImage(i)}
            />
          ))}
        </Thumbnails>
      </ImagesWrapper>
      <InfoWrapper>
        <div>
          <ShoeTitle>
            {shoe.brand} {formatModelName(shoe.model)}
          </ShoeTitle>
          <ShoeInfo>Płeć: {shoe.gender}</ShoeInfo>
        </div>
        <ShoePrice>Cena: {shoe.price} zł</ShoePrice>
        <SizesWrapper>
          <p>Wybierz rozmiar:</p>
          {shoe.sizes.map((size) => (
            <SizeButton
              key={size}
              selected={size === selectedSize}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizesWrapper>
        <AddToCartButton
          disabled={!selectedSize}
          onClick={() => {
            if (!selectedSize) return;
            addToCart(shoe, selectedSize);
          }}
        >
          Dodaj do koszyka
        </AddToCartButton>
      </InfoWrapper>
    </ShoePageWrapper>
  );
};
export default ShoePage;
