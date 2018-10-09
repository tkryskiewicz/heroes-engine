export enum TownWindowActionType {
  Open = "townWindow/open",
  Close = "townWindow/close",
}

export type TownWindowAction =
  OpenTownWindowAction |
  CloseTownWindowAction;

export interface OpenTownWindowAction {
  type: TownWindowActionType.Open;
}

export const openTownWindow = (): OpenTownWindowAction => ({
  type: TownWindowActionType.Open,
});

export interface CloseTownWindowAction {
  type: TownWindowActionType.Close;
}

export const closeTownWindow = (): CloseTownWindowAction => ({
  type: TownWindowActionType.Close,
});
