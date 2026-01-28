import { shoes } from "./shoes";
import type { Shoe } from "../../types/Shoe";

const generateSizes = (from: number, to: number, step = 0.5): number[] => {
  const sizes: number[] = [];

  for (let size = from; size <= to; size += step) {
    sizes.push(Number(size.toFixed(1)));
  }

  return sizes;
};

export const sizingMan = generateSizes(40, 48);
export const sizingWoman = generateSizes(36, 43);
export const sizingKids = generateSizes(28, 35);

const priceShoes: number[] = [
  249, 249, 319, 499, 299, 349, 229, 279, 299, 499, 339, 499, 199, 219, 499, 379, 579,
  369,
];

export const finalShoes: Shoe[] = shoes.map((shoe, index) => {
  const sizes =
    shoe.gender === "Boy" || shoe.gender === "Girl"
      ? sizingKids
      : shoe.gender === "Men"
        ? sizingMan
        : sizingWoman;

  return {
    ...shoe,
    gender: shoe.gender === "Women" ? "Women" : shoe.gender,
    price: priceShoes[index],
    sizes,
  };
});
