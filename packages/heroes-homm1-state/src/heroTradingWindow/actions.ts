import { ItemSelection, TroopSelection } from "heroes-core";

export enum HeroTradingWindowActionType {
  OpenHeroDetails = "heroTradingWindow/openHeroDetails",
  CloseHeroDetails = "heroTradingWindow/closeHeroDetails",
  SelectTroop = "heroTradingWindow/selectTroop",
  DeselectTroop = "heroTradingWindow/deselectTroop",
  SelectArtifact = "heroTradingWindow/selectArtifact",
  DeselectArtifact = "heroTradingWindow/deselectArtifact",
  OpenArtifactDetails = "heroTradingWindow/openArtifactDetails",
  CloseArtifactDetails = "heroTradingWindow/closeArtifactDetails",
  OpenArtifactNotTradablePrompt = "heroTradingWindow/openArtifactNotTradablePrompt",
  CloseArtifactNotTradablePrompt = "heroTradingWindow/closeArtifactNotTradablePrompt",
}

export type HeroTradingWindowAction =
  OpenHeroDetailsAction |
  CloseHeroDetailsAction |
  SelectTroopAction |
  DeselectTroopAction |
  SelectArtifactAction |
  DeselectArtifactAction |
  OpenArtifactDetailsAction |
  CloseArtifactDetailsAction |
  OpenArtifactNotTradablePromptAction |
  CloseArtifactNotTradablePrompt;

export interface OpenHeroDetailsAction {
  readonly type: HeroTradingWindowActionType.OpenHeroDetails;
  readonly hero: string;
}

export const openHeroDetails = (hero: string): OpenHeroDetailsAction => ({
  hero,
  type: HeroTradingWindowActionType.OpenHeroDetails,
});

export interface CloseHeroDetailsAction {
  readonly type: HeroTradingWindowActionType.CloseHeroDetails;
}

export const closeHeroDetails = (): CloseHeroDetailsAction => ({
  type: HeroTradingWindowActionType.CloseHeroDetails,
});

export interface SelectTroopAction {
  readonly type: HeroTradingWindowActionType.SelectTroop;
  readonly troop: TroopSelection;
}

export const selectTroop = (troop: TroopSelection): SelectTroopAction => ({
  troop,
  type: HeroTradingWindowActionType.SelectTroop,
});

export interface DeselectTroopAction {
  readonly type: HeroTradingWindowActionType.DeselectTroop;
}

export const deselectTroop = (): DeselectTroopAction => ({
  type: HeroTradingWindowActionType.DeselectTroop,
});

export interface SelectArtifactAction {
  readonly type: HeroTradingWindowActionType.SelectArtifact;
  readonly artifact: ItemSelection;
}

export const selectArtifact = (artifact: ItemSelection): SelectArtifactAction => ({
  artifact,
  type: HeroTradingWindowActionType.SelectArtifact,
});

export interface DeselectArtifactAction {
  readonly type: HeroTradingWindowActionType.DeselectArtifact;
}

export const deselectArtifact = (): DeselectArtifactAction => ({
  type: HeroTradingWindowActionType.DeselectArtifact,
});

export interface OpenArtifactDetailsAction {
  readonly type: HeroTradingWindowActionType.OpenArtifactDetails;
}

export const openArtifactDetails = (): OpenArtifactDetailsAction => ({
  type: HeroTradingWindowActionType.OpenArtifactDetails,
});

export interface CloseArtifactDetailsAction {
  readonly type: HeroTradingWindowActionType.CloseArtifactDetails;
}

export const closeArtifactDetails = (): CloseArtifactDetailsAction => ({
  type: HeroTradingWindowActionType.CloseArtifactDetails,
});

export interface OpenArtifactNotTradablePromptAction {
  readonly type: HeroTradingWindowActionType.OpenArtifactNotTradablePrompt;
}

export const openArtifactNotTradablePrompt = (): OpenArtifactNotTradablePromptAction => ({
  type: HeroTradingWindowActionType.OpenArtifactNotTradablePrompt,
});

export interface CloseArtifactNotTradablePrompt {
  readonly type: HeroTradingWindowActionType.CloseArtifactNotTradablePrompt;
}

export const closeArtifactNotTradablePrompt = (): CloseArtifactNotTradablePrompt => ({
  type: HeroTradingWindowActionType.CloseArtifactNotTradablePrompt,
});
