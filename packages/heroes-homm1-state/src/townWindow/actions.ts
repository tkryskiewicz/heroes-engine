import { TroopSelection } from "heroes-core";

export enum TownWindowActionType {
  SelectTroop = "townWindow/selectTroop",
  DeselectTroop = "townWindow/deselectTroop",
  OpenVisitingHeroDetails = "townWindow/openVisitingHeroDetails",
  CloseVisitingHeroDetails = "townWindow/closeVisitingHeroDetails",
  OpenStructureDetails = "townWindow/openStructureDetails",
  CloseStructureDetails = "townWindow/closeStructureDetails",
  OpenOptionDetails = "townWindow/openOptionDetails",
  CloseOptionDetails = "townWindow/closeOptionDetails",
  // FIXME: does this action fit here?
  ChangeRecruitTroopCount = "townWindow/changeRecruitTroopCount",
}

export type TownWindowAction =
  SelectTroopAction |
  DeselectTroopAction |
  OpenVisitingHeroDetailsAction |
  CloseVisitingHeroDetailsAction |
  OpenStructureDetailsAction |
  CloseStructureDetailsAction |
  OpenOptionDetailsAction |
  CloseOptionDetailsAction |
  ChangeRecruitTroopCountAction;

export interface SelectTroopAction {
  readonly type: TownWindowActionType.SelectTroop;
  readonly troop: TroopSelection;
}

export const selectTroop = (troop: TroopSelection): SelectTroopAction => ({
  troop,
  type: TownWindowActionType.SelectTroop,
});

export interface DeselectTroopAction {
  readonly type: TownWindowActionType.DeselectTroop;
}

export const deselectTroop = (): DeselectTroopAction => ({
  type: TownWindowActionType.DeselectTroop,
});

export interface OpenVisitingHeroDetailsAction {
  readonly type: TownWindowActionType.OpenVisitingHeroDetails;
}

export const openVisitingHeroDetails = (): OpenVisitingHeroDetailsAction => ({
  type: TownWindowActionType.OpenVisitingHeroDetails,
});

export interface CloseVisitingHeroDetailsAction {
  readonly type: TownWindowActionType.CloseVisitingHeroDetails;
}

export const closeVisitingHeroDetails = (): CloseVisitingHeroDetailsAction => ({
  type: TownWindowActionType.CloseVisitingHeroDetails,
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
