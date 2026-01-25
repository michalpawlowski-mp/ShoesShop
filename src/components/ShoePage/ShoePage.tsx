import { useParams } from "react-router";
import { useCart } from "../Context/CartContext";
import { finalShoes } from "../../assets/data/dataShoes";
import { useState } from "react";
import { ShoePageWrapper, ShoeDetails } from "./ShoePage.styles";
import ShoeImages from "./ShoeImages/ShoeImages";
import ShoeInfo from "./ShoeInfo/ShoeInfo";
import AddToCart from "./AddToCart/AddToCart";

const ShoePage = () => {
  const { addToCart } = useCart();
  const { model } = useParams<"model">();
  const shoe = finalShoes.find((s) => s.model === model);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!shoe) return <h2>Nie znaleziono produktu</h2>;

  return (
    <ShoePageWrapper>
      <ShoeImages
        images={shoe.images}
        model={shoe.model}
        selectedImage={selectedImage}
        onSelectImage={setSelectedImage}
      />
      <ShoeDetails>
        <ShoeInfo
          shoe={shoe}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />
        <AddToCart shoe={shoe} selectedSize={selectedSize} onAdd={addToCart} />
      </ShoeDetails>
    </ShoePageWrapper>
  );
};

export default ShoePage;
