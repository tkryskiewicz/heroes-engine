export enum TownWindowActionType {
  Open = "townWindow/open",
  Close = "townWindow/close",
  SelectGarrisonTroop = "townWindow/selectGarrisonTroop",
  OpenStructureDetails = "townWindow/openStructureDetails",
  CloseStructureDetails = "townWindow/closeStructureDetails",
  // FIXME: does this action fit here?
  ChangeRecruitTroopCount = "townWindow/changeRecruitTroopCount",
}

export type TownWindowAction =
  OpenTownWindowAction |
  CloseTownWindowAction |
  SelectGarrisonTroopAction |
  OpenStructureDetailsAction |
  CloseStructureDetailsAction |
  ChangeRecruitTroopCountAction;

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

export interface SelectGarrisonTroopAction {
  type: TownWindowActionType.SelectGarrisonTroop;
  index: number;
}

export const selectTownWindowGarrisonTroop = (index: number): SelectGarrisonTroopAction => ({
  index,
  type: TownWindowActionType.SelectGarrisonTroop,
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

export interface ChangeRecruitTroopCountAction {
  type: TownWindowActionType.ChangeRecruitTroopCount;
  count: number;
}

export const changeRecruitTroopCount = (count: number): ChangeRecruitTroopCountAction => ({
  count,
  type: TownWindowActionType.ChangeRecruitTroopCount,
});
