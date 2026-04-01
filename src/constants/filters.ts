import type { GenderFilterValue } from "../types/filters";

export const genders: { label: string; value: GenderFilterValue }[] = [
  { label: "Wszystkie", value: "All" },
  { label: "Mężczyźni", value: "Men" },
  { label: "Kobiety", value: "Women" },
  { label: "Chłopcy", value: "Boy" },
  { label: "Dziewczynki", value: "Girl" },
];
