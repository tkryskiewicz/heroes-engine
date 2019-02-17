export enum LuckType {
  Good = "good",
  Neutral = "neutral",
  Bad = "bad",
}

export const getLuckType = (value: number): LuckType => {
  if (value > 0) {
    return LuckType.Good;
  }

  if (value < 0) {
    return LuckType.Bad;
  }

  return LuckType.Neutral;
};
