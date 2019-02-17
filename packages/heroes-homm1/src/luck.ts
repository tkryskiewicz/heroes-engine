export enum LuckType {
  Good = "good",
  Neutral = "neutral",
  // TODO: is bad luck possible?
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
