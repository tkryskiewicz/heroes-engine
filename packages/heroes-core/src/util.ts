export const random = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));
