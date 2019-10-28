import { GameType } from "heroes-homm1";

export enum HighScoresWindowActionType {
  ChangeGameType = "highScoresWindow/changeGameType",
}

export type HighScoresWindowAction =
  ChangeGameTypeAction;

export interface ChangeGameTypeAction {
  readonly type: HighScoresWindowActionType.ChangeGameType;
  readonly value: GameType;
}

export const changeGameType = (value: GameType): ChangeGameTypeAction => ({
  type: HighScoresWindowActionType.ChangeGameType,
  value,
});
