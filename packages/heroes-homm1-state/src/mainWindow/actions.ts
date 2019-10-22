import { GameType } from "heroes-homm1";

export enum MainWindowActionType {
  ChangeGameType = "mainWindow/changeGameType",
  OpenHighScores = "mainWindow/openHighScores",
  CloseHighScores = "mainWindow/closeHighScores",
  OpenCredits = "mainWindow/openCredits",
  CloseCredits = "mainWindow/closeCredits",
}

export type MainWindowAction =
  ChangeGameTypeAction |
  OpenHighScoresAction |
  CloseHighScoresAction |
  OpenCreditsAction |
  CloseCreditsAction;

export interface ChangeGameTypeAction {
  readonly type: MainWindowActionType.ChangeGameType;
  readonly value: GameType;
}

export const changeGameType = (value: GameType): ChangeGameTypeAction => ({
  type: MainWindowActionType.ChangeGameType,
  value,
});

export interface OpenHighScoresAction {
  readonly type: MainWindowActionType.OpenHighScores;
}

export const openHighScores = (): OpenHighScoresAction => ({
  type: MainWindowActionType.OpenHighScores,
});

export interface CloseHighScoresAction {
  readonly type: MainWindowActionType.CloseHighScores;
}

export const closeHighScores = (): CloseHighScoresAction => ({
  type: MainWindowActionType.CloseHighScores,
});

export interface OpenCreditsAction {
  readonly type: MainWindowActionType.OpenCredits;
}

export const openCredits = (): OpenCreditsAction => ({
  type: MainWindowActionType.OpenCredits,
});

export interface CloseCreditsAction {
  readonly type: MainWindowActionType.CloseCredits;
}

export const closeCredits = (): CloseCreditsAction => ({
  type: MainWindowActionType.CloseCredits,
});
