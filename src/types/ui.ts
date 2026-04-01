import type { Shoe } from "./shoe";

export interface ShoeInfoProps {
  shoe: Shoe;
  selectedSize: number | null;
  onSelectSize: (size: number) => void;
}

export interface ShoeImagesProps {
  images: string[];
  model: string;
  selectedImage: number;
  onSelectImage: (index: number) => void;
}

export interface AddToCartProps {
  shoe: Shoe;
  selectedSize: number | null;
  onAdd: (shoe: Shoe, size: number) => void;
}
