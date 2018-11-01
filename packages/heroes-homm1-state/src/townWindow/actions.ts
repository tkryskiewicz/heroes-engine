export enum TownWindowActionType {
  Open = "townWindow/open",
  Close = "townWindow/close",
  OpenStructureDetails = "townWindow/openStructureDetails",
  CloseStructureDetails = "townWindow/closeStructureDetails",
}

export type TownWindowAction =
  OpenTownWindowAction |
  CloseTownWindowAction |
  OpenStructureDetailsAction |
  CloseStructureDetailsAction;

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

export interface OpenStructureDetailsAction {
  type: TownWindowActionType.OpenStructureDetails;
  structure: string;
}

export const openStructureDetails = (structure: string): OpenStructureDetailsAction => ({
  structure,
  type: TownWindowActionType.OpenStructureDetails,
});

export interface CloseStructureDetailsAction {
  type: TownWindowActionType.CloseStructureDetails;
}

export const closeStructureDetails = (): CloseStructureDetailsAction => ({
  type: TownWindowActionType.CloseStructureDetails,
});
