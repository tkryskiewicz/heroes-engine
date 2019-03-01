export enum TownWindowActionType {
  SelectGarrisonTroop = "townWindow/selectGarrisonTroop",
  DeselectGarrisonTroop = "townWindow/deselectGarrisonTroop",
  OpenVisitingHeroDetails = "townWindow/openVisitingHeroDetails",
  CloseVisitingHeroDetails = "townWindow/closeVisitingHeroDetails",
  SelectHeroTroop = "townWindow/selectHeroTroop",
  DeselectHeroTroop = "townWindow/deselectHeroTroop",
  OpenStructureDetails = "townWindow/openStructureDetails",
  CloseStructureDetails = "townWindow/closeStructureDetails",
  OpenOptionDetails = "townWindow/openOptionDetails",
  CloseOptionDetails = "townWindow/closeOptionDetails",
  // FIXME: does this action fit here?
  ChangeRecruitTroopCount = "townWindow/changeRecruitTroopCount",
}

export type TownWindowAction =
  SelectGarrisonTroopAction |
  DeselectGarrisonTroopAction |
  OpenVisitingHeroDetailsAction |
  CloseVisitingHeroDetailsAction |
  SelectHeroTroopAction |
  DeselectHeroTroopAction |
  OpenStructureDetailsAction |
  CloseStructureDetailsAction |
  OpenOptionDetailsAction |
  CloseOptionDetailsAction |
  ChangeRecruitTroopCountAction;

export interface SelectGarrisonTroopAction {
  readonly type: TownWindowActionType.SelectGarrisonTroop;
  readonly index: number;
}

export const selectGarrisonTroop = (index: number): SelectGarrisonTroopAction => ({
  index,
  type: TownWindowActionType.SelectGarrisonTroop,
});

export interface DeselectGarrisonTroopAction {
  readonly type: TownWindowActionType.DeselectGarrisonTroop;
}

export const deselectGarrisonTroop = (): DeselectGarrisonTroopAction => ({
  type: TownWindowActionType.DeselectGarrisonTroop,
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

export interface SelectHeroTroopAction {
  readonly type: TownWindowActionType.SelectHeroTroop;
  readonly index: number;
}

export const selectHeroTroop = (index: number): SelectHeroTroopAction => ({
  index,
  type: TownWindowActionType.SelectHeroTroop,
});

export interface DeselectHeroTroopAction {
  readonly type: TownWindowActionType.DeselectHeroTroop;
}

export const deselectHeroTroop = (): DeselectHeroTroopAction => ({
  type: TownWindowActionType.DeselectHeroTroop,
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
