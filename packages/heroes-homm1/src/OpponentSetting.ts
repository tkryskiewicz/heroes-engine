export enum OpponentSetting {
  Dumb = "dumb",
  Average = "average",
  Smart = "smart",
  // NOTE: manual uses Ingenious, but game uses Genius
  Genius = "genius",
  None = "none",
}

export const getOpponentSettingRating = (value: OpponentSetting): number =>
  value !== OpponentSetting.None ? 10 + (Object.values(OpponentSetting).indexOf(value) + 1) * 5 : 0;
