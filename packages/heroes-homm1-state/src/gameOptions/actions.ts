export enum GameOptionsActionType {
  Open = "gameOptions/open",
  Close = "gameOptions/close",
}

export type GameOptionsAction =
  OpenGameOptionsAction |
  CloseGameOptionsAction;

export interface OpenGameOptionsAction {
  readonly type: GameOptionsActionType.Open;
}

export const open = (): OpenGameOptionsAction => ({
  type: GameOptionsActionType.Open,
});

export interface CloseGameOptionsAction {
  readonly type: GameOptionsActionType.Close;
}

export const close = (): CloseGameOptionsAction => ({
  type: GameOptionsActionType.Close,
});
