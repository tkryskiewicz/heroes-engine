export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction;

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
