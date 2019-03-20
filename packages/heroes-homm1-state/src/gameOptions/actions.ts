export enum GameOptionsActionType {
  Open = "gameOptions/open",
  Close = "gameOptions/close",
}

export type GameOptionsAction =
  OpenAction |
  CloseAction;

export interface OpenAction {
  readonly type: GameOptionsActionType.Open;
}

export const open = (): OpenAction => ({
  type: GameOptionsActionType.Open,
});

export interface CloseAction {
  readonly type: GameOptionsActionType.Close;
}

export const close = (): CloseAction => ({
  type: GameOptionsActionType.Close,
});
