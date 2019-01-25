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
  readonly type: TownWindowActionType.Open;
}

export const openTownWindow = (): OpenTownWindowAction => ({
  type: TownWindowActionType.Open,
});

export interface CloseTownWindowAction {
  readonly type: TownWindowActionType.Close;
}

export const closeTownWindow = (): CloseTownWindowAction => ({
  type: TownWindowActionType.Close,
});

export interface SelectGarrisonTroopAction {
  readonly type: TownWindowActionType.SelectGarrisonTroop;
  readonly index: number;
}

export const selectTownWindowGarrisonTroop = (index: number): SelectGarrisonTroopAction => ({
  index,
  type: TownWindowActionType.SelectGarrisonTroop,
});

export interface SelectHeroTroopAction {
  readonly type: TownWindowActionType.SelectHeroTroop;
  readonly index: number;
}

export const selectTownWindowHeroTroop = (index: number): SelectHeroTroopAction => ({
  index,
  type: TownWindowActionType.SelectHeroTroop,
});

export interface OpenStructureDetailsAction {
  readonly type: TownWindowActionType.OpenStructureDetails;
  readonly structure: string;
}

export const openStructureDetails = (structure: string): OpenStructureDetailsAction => ({
  structure,
  type: TownWindowActionType.OpenStructureDetails,
});

export interface CloseStructureDetailsAction {
  readonly type: TownWindowActionType.CloseStructureDetails;
}

export const closeStructureDetails = (): CloseStructureDetailsAction => ({
  type: TownWindowActionType.CloseStructureDetails,
});

export interface OpenOptionDetailsAction {
  readonly type: TownWindowActionType.OpenOptionDetails;
  readonly value: string;
}

export const openOptionDetails = (value: string): OpenOptionDetailsAction => ({
  type: TownWindowActionType.OpenOptionDetails,
  value,
});

export interface CloseOptionDetailsAction {
  readonly type: TownWindowActionType.CloseOptionDetails;
}

export const closeOptionDetails = (): CloseOptionDetailsAction => ({
  type: TownWindowActionType.CloseOptionDetails,
});

export interface ChangeRecruitTroopCountAction {
  readonly type: TownWindowActionType.ChangeRecruitTroopCount;
  readonly count: number;
}

export const changeRecruitTroopCount = (count: number): ChangeRecruitTroopCountAction => ({
  count,
  type: TownWindowActionType.ChangeRecruitTroopCount,
});
