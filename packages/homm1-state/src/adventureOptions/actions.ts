export enum AdventureOptionsActionType {
  Open = "adventureOptions/open",
  Close = "adventureOptions/close",
}

export type AdventureOptionsAction =
  OpenAdventureOptionsAction |
  CloseAdventureOptionsAction;

export interface OpenAdventureOptionsAction {
  type: AdventureOptionsActionType.Open;
}

export const openAdventureOptions = (): OpenAdventureOptionsAction => ({
  type: AdventureOptionsActionType.Open,
});

export interface CloseAdventureOptionsAction {
  type: AdventureOptionsActionType.Close;
}

export const closeAdventureOptions = (): CloseAdventureOptionsAction => ({
  type: AdventureOptionsActionType.Close,
});
