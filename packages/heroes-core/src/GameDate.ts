export interface GameDate {
  readonly month: number;
  readonly week: number;
  readonly day: number;
}

export const getDate = (turn: number): GameDate => ({
  day: turn % 7 + 1,
  month: Math.floor(turn / 28) + 1,
  week: Math.floor(turn / 7 % 4) + 1,
});
