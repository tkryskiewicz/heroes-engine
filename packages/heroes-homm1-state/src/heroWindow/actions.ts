export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
  ChangeVisibleSkillDetails = "heroWindow/changeVisibleSkillDetails",
  SelectTroop = "heroWindow/selectTroop",
  OpenDismissHeroPrompt = "heroWindow/openDismissHeroPrompt",
  CloseDismissHeroPrompt = "heroWindow/closeDismissHeroPrompt",
  ChangeStatusText = "heroWindow/changeStatusText",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction |
  ChangeVisibleSkillDetails |
  SelectHeroWindowTroopAction |
  OpenDismissHeroPromptAction |
  CloseDismissHeroPromptAction |
  ChangeStatusTextAction;

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

export interface ChangeVisibleSkillDetails {
  type: HeroWindowActionType.ChangeVisibleSkillDetails;
  skill?: string;
}

export const changeVisibleSkill = (skill?: string) => ({
  skill,
  type: HeroWindowActionType.ChangeVisibleSkillDetails,
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

export interface ChangeStatusTextAction {
  type: HeroWindowActionType.ChangeStatusText;
  value: string;
}

export const changeStatusText = (value: string): ChangeStatusTextAction => ({
  type: HeroWindowActionType.ChangeStatusText,
  value,
});
