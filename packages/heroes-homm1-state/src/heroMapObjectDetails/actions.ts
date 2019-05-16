import { HeroMapObjectDetails } from "heroes-homm1";

export enum HeroMapObjectDetailsActionType {
  ChangeValue = "heroMapObjectDetails/changeValue",
  OpenCreatureValueRangePrompt = "heroMapObjectDetails/openCreatureValueRangePrompt",
  CloseCreatureValueRangePrompt = "heroMapObjectDetails/CloseCreatureValueRangePrompt",
}

export type HeroMapObjectDetailsAction =
  ChangeValueAction |
  OpenCreatureValueRangePromptAction |
  CloseCreatureValueRangePromptAction;

export interface ChangeValueAction {
  readonly type: HeroMapObjectDetailsActionType.ChangeValue;
  readonly value: HeroMapObjectDetails;
}

export const changeValue = (value: HeroMapObjectDetails): ChangeValueAction => ({
  type: HeroMapObjectDetailsActionType.ChangeValue,
  value,
});

export interface OpenCreatureValueRangePromptAction {
  readonly type: HeroMapObjectDetailsActionType.OpenCreatureValueRangePrompt;
}

export const openCreatureValueRangePrompt = (): OpenCreatureValueRangePromptAction => ({
  type: HeroMapObjectDetailsActionType.OpenCreatureValueRangePrompt,
});

export interface CloseCreatureValueRangePromptAction {
  readonly type: HeroMapObjectDetailsActionType.CloseCreatureValueRangePrompt;
}

export const closeCreatureValueRangePrompt = (): CloseCreatureValueRangePromptAction => ({
  type: HeroMapObjectDetailsActionType.CloseCreatureValueRangePrompt,
});
