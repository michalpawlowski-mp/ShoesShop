const allShoes = import.meta.glob("../shoes/**", { eager: true });

export const shoes = Object.entries(allShoes).reduce((acc, [path, module]) => {
  const parts = path.split("/");

  const brand = parts[2]; // Nike
  const group = parts[3]; // Kids / Men / Women

  let gender;
  let model;

  if (group === "Kids") {
    gender = parts[4]; // Boy / Girl
    model = parts[5]; // Model
  } else {
    gender = group; // Men / Women
    model = parts[4]; // Model
  }

  let shoe = acc.find(
    (item) =>
      item.brand === brand && item.gender === gender && item.model === model
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

  shoe.images.push(module.default ?? module);

  return acc;
}, [] as any[]);
