export function formatModelName(model: string, brand: string): string {
  return model
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([a-zA-Z])(\d+)/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
