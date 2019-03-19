import { TroopSelection } from "heroes-core";

export enum HeroTradingWindowActionType {
  OpenHeroDetails = "heroTradingWindow/openHeroDetails",
  CloseHeroDetails = "heroTradingWindow/closeHeroDetails",
  SelectTroop = "heroTradingWindow/selectTroop",
  DeselectTroop = "heroTradingWindow/deselectTroop",
}

export type HeroTradingWindowAction =
  OpenHeroDetailsAction |
  CloseHeroDetailsAction |
  SelectTroopAction |
  DeselectTroopAction;

export interface OpenHeroDetailsAction {
  readonly type: HeroTradingWindowActionType.OpenHeroDetails;
  readonly hero: string;
}

export const openHeroDetails = (hero: string): OpenHeroDetailsAction => ({
  hero,
  type: HeroTradingWindowActionType.OpenHeroDetails,
});

export interface CloseHeroDetailsAction {
  readonly type: HeroTradingWindowActionType.CloseHeroDetails;
}

export const closeHeroDetails = (): CloseHeroDetailsAction => ({
  type: HeroTradingWindowActionType.CloseHeroDetails,
});

export interface SelectTroopAction {
  readonly type: HeroTradingWindowActionType.SelectTroop;
  readonly troop: TroopSelection;
}

export const selectTroop = (troop: TroopSelection): SelectTroopAction => ({
  troop,
  type: HeroTradingWindowActionType.SelectTroop,
});

export interface DeselectTroopAction {
  readonly type: HeroTradingWindowActionType.DeselectTroop;
}

export const deselectTroop = (): DeselectTroopAction => ({
  type: HeroTradingWindowActionType.DeselectTroop,
});
