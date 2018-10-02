export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
  SelectTroop = "heroWindow/selectTroop",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction |
  SelectHeroWindowTroopAction;

export interface OpenHeroWindowAction {
  type: HeroWindowActionType.Open;
}

export const openHeroWindow = (): OpenHeroWindowAction => ({
  type: HeroWindowActionType.Open,
});

export interface CloseHeroWindowAction {
  type: HeroWindowActionType.Close;
}

export const closeHeroWindow = (): CloseHeroWindowAction => ({
  type: HeroWindowActionType.Close,
});

export interface SelectHeroWindowTroopAction {
  type: HeroWindowActionType.SelectTroop;
  index: number;
}

export const selectHeroWindowTroop = (index: number): SelectHeroWindowTroopAction => ({
  index,
  type: HeroWindowActionType.SelectTroop,
});
