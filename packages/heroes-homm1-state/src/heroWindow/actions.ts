export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
  SelectTroop = "heroWindow/selectTroop",
  OpenDismissHeroPrompt = "heroWindow/openDismissHeroPrompt",
  CloseDismissHeroPrompt = "heroWindow/closeDismissHeroPrompt",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction |
  SelectHeroWindowTroopAction |
  OpenDismissHeroPromptAction |
  CloseDismissHeroPromptAction;

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

export interface OpenDismissHeroPromptAction {
  type: HeroWindowActionType.OpenDismissHeroPrompt;
}

export const openDismissHeroPrompt = (): OpenDismissHeroPromptAction => ({
  type: HeroWindowActionType.OpenDismissHeroPrompt,
});

export interface CloseDismissHeroPromptAction {
  type: HeroWindowActionType.CloseDismissHeroPrompt;
}

export const closeDismissHeroPrompt = (): CloseDismissHeroPromptAction => ({
  type: HeroWindowActionType.CloseDismissHeroPrompt,
});
