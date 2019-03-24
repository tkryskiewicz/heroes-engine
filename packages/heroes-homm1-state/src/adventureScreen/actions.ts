export enum AdventureScreenActionType {
  OpenMapObjectDetails = "adventureScreen/openMapObjectDetails",
  CloseMapObjectDetails = "adventureScreen/closeMapObjectDetails",
  ChangeEndTurnPromptVisible = "adventureScreen/changeEndTurnPromptVisible",
  OpenHeroTradingScreen = "adventureScreen/openHeroTradingWindow",
  CloseHeroTradingScreen = "adventureScreen/closeHeroTradingWindow",
}

export type AdventureScreenAction =
  OpenMapObjectDetailsAction |
  CloseMapObjectDetailsAction |
  ChangeEndTurnPromptVisibleAction |
  OpenHeroTradingWindowAction |
  CloseHeroTradingWindowAction;

export interface OpenMapObjectDetailsAction {
  readonly type: AdventureScreenActionType.OpenMapObjectDetails;
  readonly id: string;
}

export const openMapObjectDetails = (id: string): OpenMapObjectDetailsAction => ({
  id,
  type: AdventureScreenActionType.OpenMapObjectDetails,
});

export interface CloseMapObjectDetailsAction {
  readonly type: AdventureScreenActionType.CloseMapObjectDetails;
}

export const closeMapObjectDetails = (): CloseMapObjectDetailsAction => ({
  type: AdventureScreenActionType.CloseMapObjectDetails,
});

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
