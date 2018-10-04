export enum OpponentSetting {
  Dumb = "dumb",
  Average = "average",
  Smart = "smart",
  // NOTE: manual uses Ingenious, but game uses Genius
  Genius = "genius",
  None = "none",
}

const OpponentSettings = [
  OpponentSetting.Dumb,
  OpponentSetting.Average,
  OpponentSetting.Smart,
  OpponentSetting.Genius,
  OpponentSetting.None,
];

export const changeOpponentSetting = (value: OpponentSetting): OpponentSetting =>
  OpponentSettings[(OpponentSettings.indexOf(value) + 1) % OpponentSettings.length];

export const getOpponentSettingRating = (value: OpponentSetting): number =>
  value !== OpponentSetting.None ? 10 + (OpponentSettings.indexOf(value) + 1) * 5 : 0;
