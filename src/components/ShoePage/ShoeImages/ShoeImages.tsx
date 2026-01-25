import { ImagesWrapper, Thumbnails, Thumbnail, MainImage } from "./ShoeImages.styles";

interface ShoeImagesProps {
  images: string[];
  model: string;
  selectedImage: number;
  onSelectImage: (index: number) => void;
}

const ShoeImages: React.FC<ShoeImagesProps> = ({
  images,
  model,
  selectedImage,
  onSelectImage,
}) => {
  return (
    <ImagesWrapper>
      <MainImage src={images[selectedImage]} alt={model} />
      <Thumbnails>
        {images.map((img, i) => (
          <Thumbnail
            key={img}
            src={img}
            selected={i === selectedImage}
            onClick={() => onSelectImage(i)}
          />
        ))}
      </Thumbnails>
    </ImagesWrapper>
  );
};

export default ShoeImages;


