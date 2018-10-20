export enum Alignment {
  Blue = "blue",
  Green = "green",
  Red = "red",
  Yellow = "yellow",
}

// NOTE: order comes from new game window
const Alignments = [
  Alignment.Blue,
  Alignment.Green,
  Alignment.Red,
  Alignment.Yellow,
];

export const changeAlignment = (value: Alignment): Alignment =>
  Alignments[(Alignments.indexOf(value) + 1) % Alignments.length];
