export const random = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));

export const previousOption = <T>(options: T[], selectedOption: T): T =>
  options[(options.length + options.indexOf(selectedOption) - 1) % options.length];

export const nextOption = <T>(options: T[], selectedOption: T): T =>
  options[(options.indexOf(selectedOption) + 1) % options.length];
