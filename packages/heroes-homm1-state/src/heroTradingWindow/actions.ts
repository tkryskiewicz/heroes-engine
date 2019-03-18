import { TroopSelection } from "heroes-core";

export enum HeroTradingWindowActionType {
  SelectTroop = "heroTradingWindow/selectTroop",
  DeselectTroop = "heroTradingWindow/deselectTroop",
}

export type HeroTradingWindowAction =
  SelectTroopAction |
  DeselectTroopAction;

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
