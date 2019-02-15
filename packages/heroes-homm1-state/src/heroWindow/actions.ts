export enum HeroWindowActionType {
  Open = "heroWindow/open",
  Close = "heroWindow/close",
  ChangeVisibleSkillDetails = "heroWindow/changeVisibleSkillDetails",
  ChangeVisibleAdditionalStatDetails = "heroWindow/changeVisibleAdditionalStatDetails",
  SelectTroop = "heroWindow/selectTroop",
  DeselectTroop = "heroWindow/deselectTroop",
  OpenTroopDetails = "heroWindow/openTroopDetails",
  CloseTroopDetails = "heroWindow/closeTroopDetails",
  OpenDismissTroopPrompt = "heroWindow/openDismissTroopPrompt",
  CloseDismissTroopPrompt = "heroWindow/closeDismissTroopPrompt",
  ChangeVisibleArtifactDetails = "heroWindow/changeVisibleArtifactDetails",
  OpenDismissHeroPrompt = "heroWindow/openDismissHeroPrompt",
  CloseDismissHeroPrompt = "heroWindow/closeDismissHeroPrompt",
}

export type HeroWindowAction =
  OpenHeroWindowAction |
  CloseHeroWindowAction |
  ChangeVisibleSkillDetailsAction |
  ChangeVisibleAdditionalStatDetailsAction |
  SelectHeroWindowTroopAction |
  DeselectTroopAction |
  OpenTroopDetails |
  CloseTroopDetails |
  OpenDismissTroopPromptAction |
  CloseDismissTroopPromptAction |
  ChangeVisibleArtifactDetailsAction |
  OpenDismissHeroPromptAction |
  CloseDismissHeroPromptAction;

export interface OpenHeroWindowAction {
  readonly type: HeroWindowActionType.Open;
  readonly heroIndex: number;
}

export const open = (heroIndex: number): OpenHeroWindowAction => ({
  heroIndex,
  type: HeroWindowActionType.Open,
});

export interface CloseHeroWindowAction {
  readonly type: HeroWindowActionType.Close;
}

export const close = (): CloseHeroWindowAction => ({
  type: HeroWindowActionType.Close,
});

export interface ChangeVisibleSkillDetailsAction {
  readonly type: HeroWindowActionType.ChangeVisibleSkillDetails;
  readonly skill?: string;
}

export const changeVisibleSkillDetails = (skill?: string): ChangeVisibleSkillDetailsAction => ({
  skill,
  type: HeroWindowActionType.ChangeVisibleSkillDetails,
});

export interface ChangeVisibleAdditionalStatDetailsAction {
  readonly type: HeroWindowActionType.ChangeVisibleAdditionalStatDetails;
  readonly stat?: string;
}

export const changeVisibleAdditionalStatDetails = (stat?: string): ChangeVisibleAdditionalStatDetailsAction => ({
  stat,
  type: HeroWindowActionType.ChangeVisibleAdditionalStatDetails,
});

export interface SelectHeroWindowTroopAction {
  readonly type: HeroWindowActionType.SelectTroop;
  readonly index: number;
}

export const selectTroop = (index: number): SelectHeroWindowTroopAction => ({
  index,
  type: HeroWindowActionType.SelectTroop,
});

export interface DeselectTroopAction {
  readonly type: HeroWindowActionType.DeselectTroop;
}

export const deselectTroop = (): DeselectTroopAction => ({
  type: HeroWindowActionType.DeselectTroop,
});

export interface OpenTroopDetails {
  readonly type: HeroWindowActionType.OpenTroopDetails;
  readonly index: number;
}

export const openTroopDetails = (index: number): OpenTroopDetails => ({
  index,
  type: HeroWindowActionType.OpenTroopDetails,
});

export interface CloseTroopDetails {
  readonly type: HeroWindowActionType.CloseTroopDetails;
}

export const closeTroopDetails = (): CloseTroopDetails => ({
  type: HeroWindowActionType.CloseTroopDetails,
});

export interface OpenDismissTroopPromptAction {
  readonly type: HeroWindowActionType.OpenDismissTroopPrompt;
  readonly index: number;
}

export const openDismissTroopPrompt = (index: number): OpenDismissTroopPromptAction => ({
  index,
  type: HeroWindowActionType.OpenDismissTroopPrompt,
});

export interface CloseDismissTroopPromptAction {
  readonly type: HeroWindowActionType.CloseDismissTroopPrompt;
}

export const closeDismissTroopPrompt = (): CloseDismissTroopPromptAction => ({
  type: HeroWindowActionType.CloseDismissTroopPrompt,
});

export interface ChangeVisibleArtifactDetailsAction {
  readonly type: HeroWindowActionType.ChangeVisibleArtifactDetails;
  readonly index?: number;
}

export const changeVisibleArtifactDetails = (index?: number): ChangeVisibleArtifactDetailsAction => ({
  index,
  type: HeroWindowActionType.ChangeVisibleArtifactDetails,
});

export interface OpenDismissHeroPromptAction {
  readonly type: HeroWindowActionType.OpenDismissHeroPrompt;
}

export const openDismissHeroPrompt = (): OpenDismissHeroPromptAction => ({
  type: HeroWindowActionType.OpenDismissHeroPrompt,
});

export interface CloseDismissHeroPromptAction {
  readonly type: HeroWindowActionType.CloseDismissHeroPrompt;
}

export const closeDismissHeroPrompt = (): CloseDismissHeroPromptAction => ({
  type: HeroWindowActionType.CloseDismissHeroPrompt,
});
