type Gender = "Men" | "Women" | "Boy" | "Girl";

type ShoeRaw = {
  brand: string;
  group: "Kids" | "Men" | "Women";
  gender: Gender;
  model: string;
  images: string[];
};

type ImageModule = {
  default: string;
};

const allShoes = import.meta.glob<ImageModule>("../shoes/**", { eager: true });

export const shoes = Object.entries(allShoes).reduce<ShoeRaw[]>((acc, [path, module]) => {
  const parts = path.split("/");

  const brand = parts[2];
  const group = parts[3] as ShoeRaw["group"];

  let gender: Gender;
  let model: string;

  if (group === "Kids") {
    gender = parts[4] as Gender;
    model = parts[5];
  } else {
    gender = group;
    model = parts[4];
  }

  let shoe = acc.find(
    (item) => item.brand === brand && item.gender === gender && item.model === model
  );

  if (!shoe) {
    shoe = {
      brand,
      group,
      gender,
      model,
      images: [],
    };
    acc.push(shoe);
  }

  shoe.images.push(module.default);

  return acc;
}, []);
