export enum AdventureWindowActionType {
  OpenObjectDetails = "adventureWindow/openObjectDetails",
  CloseObjectDetails = "adventureWindow/closeObjectDetails",
  ChangeEndTurnPromptVisible = "adventureWindow/changeEndTurnPromptVisible",
  OpenHeroTradingScreen = "adventureWindow/openHeroTradingWindow",
  CloseHeroTradingScreen = "adventureWindow/closeHeroTradingWindow",
}

export type AdventureWindowAction =
  OpenObjectDetailsAction |
  CloseObjectDetailsAction |
  ChangeEndTurnPromptVisibleAction |
  OpenHeroTradingWindowAction |
  CloseHeroTradingWindowAction;

export interface OpenObjectDetailsAction {
  readonly type: AdventureWindowActionType.OpenObjectDetails;
  readonly id: string;
}

export const openObjectDetails = (id: string): OpenObjectDetailsAction => ({
  id,
  type: AdventureWindowActionType.OpenObjectDetails,
});

export interface CloseObjectDetailsAction {
  readonly type: AdventureWindowActionType.CloseObjectDetails;
}

export const closeObjectDetails = (): CloseObjectDetailsAction => ({
  type: AdventureWindowActionType.CloseObjectDetails,
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
