import React, { useState } from "react";
import {
  ModalWrapper,
  CloseButton,
  MainImage,
  Thumbnail,
  ThumbnailContainer,
  Title,
  Price,
  SizeContainer,
  SizeButton,
  AddToCartButton,
} from "./StyledModal";

type Props = {
  shoe: any;
  onClose: () => void;
};

const ShoeModal: React.FC<Props> = ({ shoe, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <MainImage src={shoe.images[activeImage]} alt={shoe.model} />
      <ThumbnailContainer>
        {shoe.images.map((img: string, index: number) => (
          <Thumbnail
            key={index}
            src={img}
            width={60}
            active={activeImage === index}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </ThumbnailContainer>
      <Title>
        {shoe.brand} {shoe.model}
      </Title>
      <Price>{shoe.price} zł</Price>
      <SizeContainer>
        {shoe.sizes.map((size: number) => (
          <SizeButton
            key={size}
            isSelected={selectedSize === size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </SizeButton>
        ))}
      </SizeContainer>
      <AddToCartButton disabled={!selectedSize}>
        {selectedSize ? "Dodaj do koszyka" : "Wybierz rozmiar"}
      </AddToCartButton>
    </ModalWrapper>
  );
};

export default ShoeModal;
