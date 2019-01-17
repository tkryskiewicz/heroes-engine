export enum TownWindowActionType {
  Open = "townWindow/open",
  Close = "townWindow/close",
  SelectGarrisonTroop = "townWindow/selectGarrisonTroop",
  SelectHeroTroop = "townWindow/selectHeroTroop",
  OpenStructureDetails = "townWindow/openStructureDetails",
  CloseStructureDetails = "townWindow/closeStructureDetails",
  OpenOptionDetails = "townWindow/openOptionDetails",
  CloseOptionDetails = "townWindow/closeOptionDetails",
  // FIXME: does this action fit here?
  ChangeRecruitTroopCount = "townWindow/changeRecruitTroopCount",
}

export type TownWindowAction =
  OpenTownWindowAction |
  CloseTownWindowAction |
  SelectGarrisonTroopAction |
  SelectHeroTroopAction |
  OpenStructureDetailsAction |
  CloseStructureDetailsAction |
  OpenOptionDetailsAction |
  CloseOptionDetailsAction |
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

export interface SelectHeroTroopAction {
  type: TownWindowActionType.SelectHeroTroop;
  index: number;
}

export const selectTownWindowHeroTroop = (index: number): SelectHeroTroopAction => ({
  index,
  type: TownWindowActionType.SelectHeroTroop,
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

export interface OpenOptionDetailsAction {
  type: TownWindowActionType.OpenOptionDetails;
  value: string;
}

export const openOptionDetails = (value: string): OpenOptionDetailsAction => ({
  type: TownWindowActionType.OpenOptionDetails,
  value,
});

export interface CloseOptionDetailsAction {
  type: TownWindowActionType.CloseOptionDetails;
}

export const closeOptionDetails = (): CloseOptionDetailsAction => ({
  type: TownWindowActionType.CloseOptionDetails,
});

export interface ChangeRecruitTroopCountAction {
  type: TownWindowActionType.ChangeRecruitTroopCount;
  count: number;
}

export const changeRecruitTroopCount = (count: number): ChangeRecruitTroopCountAction => ({
  count,
  type: TownWindowActionType.ChangeRecruitTroopCount,
});
