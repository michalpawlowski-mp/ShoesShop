import { shoes } from "./shoes";

const sizingMan: number[] = [
  38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45,
  45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5, 50,
];
const sizingWoman: number[] = [
  36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43,
  43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48,
];
const sizingKids: number[] = [
  35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40,
];

const priceShoes: number[] = [
  249, 249, 319, 499, 299, 349, 229, 279, 299, 499, 339, 499, 199, 219, 499,
  379, 579, 369,
];

export const shoesConfig: Record<string, any> = {};

export const finalShoes = shoes.map((shoe, index) => {
  const key = `${shoe.brand}|${shoe.model}|${shoe.gender}`;

  shoesConfig[key] = {
    price: priceShoes[index],
    sizes:
      shoe.gender === "Boy" || shoe.gender === "Girl"
        ? sizingKids
        : shoe.gender === "Men"
        ? sizingMan
        : sizingWoman,
  };

  return {
    ...shoe,
    ...shoesConfig[key],
  };
});
