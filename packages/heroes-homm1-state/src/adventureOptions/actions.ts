export enum AdventureOptionsActionType {
  Open = "adventureOptions/open",
  Close = "adventureOptions/close",
}

export type AdventureOptionsAction =
  OpenAction |
  CloseAction;

export interface OpenAction {
  readonly type: AdventureOptionsActionType.Open;
}

export const open = (): OpenAction => ({
  type: AdventureOptionsActionType.Open,
});

export interface CloseAction {
  readonly type: AdventureOptionsActionType.Close;
}

export const close = (): CloseAction => ({
  type: AdventureOptionsActionType.Close,
});
