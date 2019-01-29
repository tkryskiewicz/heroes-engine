export enum AdventureOptionsActionType {
  Open = "adventureOptions/open",
  Close = "adventureOptions/close",
}

export type AdventureOptionsAction =
  OpenAdventureOptionsAction |
  CloseAdventureOptionsAction;

export interface OpenAdventureOptionsAction {
  readonly type: AdventureOptionsActionType.Open;
}

export const open = (): OpenAdventureOptionsAction => ({
  type: AdventureOptionsActionType.Open,
});

export interface CloseAdventureOptionsAction {
  readonly type: AdventureOptionsActionType.Close;
}

export const close = (): CloseAdventureOptionsAction => ({
  type: AdventureOptionsActionType.Close,
});
