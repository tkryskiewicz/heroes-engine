export enum AdventureScreenActionType {
  ChangeEndTurnPromptVisible = "adventureScreen/changeEndTurnPromptVisible",
  OpenHeroTradingScreen = "adventureScreen/openHeroTradingWindow",
  CloseHeroTradingScreen = "adventureScreen/closeHeroTradingWindow",
}

export type AdventureScreenAction =
  ChangeEndTurnPromptVisibleAction |
  OpenHeroTradingWindowAction |
  CloseHeroTradingWindowAction;

export interface ChangeEndTurnPromptVisibleAction {
  readonly type: AdventureScreenActionType.ChangeEndTurnPromptVisible;
  readonly value: boolean;
}

export const changeEndTurnPromptVisible = (value: boolean): ChangeEndTurnPromptVisibleAction => ({
  type: AdventureScreenActionType.ChangeEndTurnPromptVisible,
  value,
});

export interface OpenHeroTradingWindowAction {
  readonly type: AdventureScreenActionType.OpenHeroTradingScreen;
  readonly hero: string;
  readonly otherHero: string;
}

export const openHeroTradingWindow = (hero: string, otherHero: string): OpenHeroTradingWindowAction => ({
  hero,
  otherHero,
  type: AdventureScreenActionType.OpenHeroTradingScreen,
});

export interface CloseHeroTradingWindowAction {
  readonly type: AdventureScreenActionType.CloseHeroTradingScreen;
}

export const closeHeroTradingWindow = (): CloseHeroTradingWindowAction => ({
  type: AdventureScreenActionType.CloseHeroTradingScreen,
});
