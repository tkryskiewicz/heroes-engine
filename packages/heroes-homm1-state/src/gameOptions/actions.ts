import { GameOption } from "heroes-homm1";

export enum GameOptionsActionType {
  OpenEndGamePrompt = "gameOptions/openEndGamePrompt",
  CloseEndGamePrompt = "gameOptions/closeEndGamePrompt",
}

export type GameOptionsAction =
  OpenEndGamePromptAction |
  CloseEndGamePromptAction;

export interface OpenEndGamePromptAction {
  readonly type: GameOptionsActionType.OpenEndGamePrompt;
  readonly option: GameOption;
}

export const openEndGamePrompt = (option: GameOption): OpenEndGamePromptAction => ({
  option,
  type: GameOptionsActionType.OpenEndGamePrompt,
});

export interface CloseEndGamePromptAction {
  readonly type: GameOptionsActionType.CloseEndGamePrompt;
}

export const closeEndGamePrompt = (): CloseEndGamePromptAction => ({
  type: GameOptionsActionType.CloseEndGamePrompt,
});
