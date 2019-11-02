export enum AdventureWindowActionType {
  OpenMapObjectDetails = "adventureWindow/openMapObjectDetails",
  CloseMapObjectDetails = "adventureWindow/closeMapObjectDetails",
  ChangeEndTurnPromptVisible = "adventureWindow/changeEndTurnPromptVisible",
  OpenHeroTradingScreen = "adventureWindow/openHeroTradingWindow",
  CloseHeroTradingScreen = "adventureWindow/closeHeroTradingWindow",
}

export type AdventureWindowAction =
  OpenMapObjectDetailsAction |
  CloseMapObjectDetailsAction |
  ChangeEndTurnPromptVisibleAction |
  OpenHeroTradingWindowAction |
  CloseHeroTradingWindowAction;

export interface OpenMapObjectDetailsAction {
  readonly type: AdventureWindowActionType.OpenMapObjectDetails;
  readonly id: string;
}

export const openMapObjectDetails = (id: string): OpenMapObjectDetailsAction => ({
  id,
  type: AdventureWindowActionType.OpenMapObjectDetails,
});

export interface CloseMapObjectDetailsAction {
  readonly type: AdventureWindowActionType.CloseMapObjectDetails;
}

export const closeMapObjectDetails = (): CloseMapObjectDetailsAction => ({
  type: AdventureWindowActionType.CloseMapObjectDetails,
});

export interface ChangeEndTurnPromptVisibleAction {
  readonly type: AdventureWindowActionType.ChangeEndTurnPromptVisible;
  readonly value: boolean;
}

export const changeEndTurnPromptVisible = (value: boolean): ChangeEndTurnPromptVisibleAction => ({
  type: AdventureWindowActionType.ChangeEndTurnPromptVisible,
  value,
});

export interface OpenHeroTradingWindowAction {
  readonly type: AdventureWindowActionType.OpenHeroTradingScreen;
  readonly hero: string;
  readonly otherHero: string;
}

export const openHeroTradingWindow = (hero: string, otherHero: string): OpenHeroTradingWindowAction => ({
  hero,
  otherHero,
  type: AdventureWindowActionType.OpenHeroTradingScreen,
});

export interface CloseHeroTradingWindowAction {
  readonly type: AdventureWindowActionType.CloseHeroTradingScreen;
}

export const closeHeroTradingWindow = (): CloseHeroTradingWindowAction => ({
  type: AdventureWindowActionType.CloseHeroTradingScreen,
});
