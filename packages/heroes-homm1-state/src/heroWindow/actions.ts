export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
  ChangeVisibleSkillDetails = "heroWindow/changeVisibleSkillDetails",
  ChangeVisibleMiscInfoDetails = "heroWindow/changeVisibleMiscInfoDetails",
  SelectTroop = "heroWindow/selectTroop",
  OpenTroopDetails = "heroWindow/openTroopDetails",
  CloseTroopDetails = "heroWindow/closeTroopDetails",
  OpenDismissTroopPrompt = "heroWindow/openDismissTroopPrompt",
  CloseDismissTroopPrompt = "heroWindow/closeDismissTroopPrompt",
  ChangeVisibleArtifactDescription = "hero/changeVisibleArtifactDescription",
  OpenDismissHeroPrompt = "heroWindow/openDismissHeroPrompt",
  CloseDismissHeroPrompt = "heroWindow/closeDismissHeroPrompt",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction |
  ChangeVisibleSkillDetailsAction |
  ChangeVisibleMiscInfoDetailsAction |
  SelectHeroWindowTroopAction |
  OpenTroopDetails |
  CloseTroopDetails |
  OpenDismissTroopPromptAction |
  CloseDismissTroopPromptAction |
  ChangeVisibleArtifactDescriptionAction |
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

export interface ChangeVisibleSkillDetailsAction {
  type: HeroWindowActionType.ChangeVisibleSkillDetails;
  skill?: string;
}

export const changeVisibleHeroWindowSkillDetails = (skill?: string): ChangeVisibleSkillDetailsAction => ({
  skill,
  type: HeroWindowActionType.ChangeVisibleSkillDetails,
});

export interface ChangeVisibleMiscInfoDetailsAction {
  type: HeroWindowActionType.ChangeVisibleMiscInfoDetails;
  infoType?: string;
}

export const changeVisibleMiscInfoDetails = (infoType?: string): ChangeVisibleMiscInfoDetailsAction => ({
  infoType,
  type: HeroWindowActionType.ChangeVisibleMiscInfoDetails,
});

export interface SelectHeroWindowTroopAction {
  type: HeroWindowActionType.SelectTroop;
  index: number;
}

export const selectHeroWindowTroop = (index: number): SelectHeroWindowTroopAction => ({
  index,
  type: HeroWindowActionType.SelectTroop,
});

export interface OpenTroopDetails {
  type: HeroWindowActionType.OpenTroopDetails;
  index: number;
}

export const openTroopDetails = (index: number): OpenTroopDetails => ({
  index,
  type: HeroWindowActionType.OpenTroopDetails,
});

export interface CloseTroopDetails {
  type: HeroWindowActionType.CloseTroopDetails;
}

export const closeTroopDetails = (): CloseTroopDetails => ({
  type: HeroWindowActionType.CloseTroopDetails,
});

export interface OpenDismissTroopPromptAction {
  type: HeroWindowActionType.OpenDismissTroopPrompt;
  index: number;
}

export const openDismissTroopPrompt = (index: number): OpenDismissTroopPromptAction => ({
  index,
  type: HeroWindowActionType.OpenDismissTroopPrompt,
});

export interface CloseDismissTroopPromptAction {
  type: HeroWindowActionType.CloseDismissTroopPrompt;
  index: number;
}

export const closeDismissTroopPrompt = (index: number): CloseDismissTroopPromptAction => ({
  index,
  type: HeroWindowActionType.CloseDismissTroopPrompt,
});

export interface ChangeVisibleArtifactDescriptionAction {
  type: HeroWindowActionType.ChangeVisibleArtifactDescription;
  index?: number;
}

export const changeVisibleArtifactDescription = (index?: number): ChangeVisibleArtifactDescriptionAction => ({
  index,
  type: HeroWindowActionType.ChangeVisibleArtifactDescription,
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
