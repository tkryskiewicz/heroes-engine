import { TownMapObjectDetails } from "heroes-homm1";

export enum TownMapObjectDetailsActionType {
  ChangeValue = "townMapObjectDetailsActionType/changeValue",
  OpenCreatureValueRangePrompt = "townMapObjectDetails/openCreatureValueRangePrompt",
  CloseCreatureValueRangePrompt = "townMapObjectDetails/CloseCreatureValueRangePrompt",
}

export type TownMapObjectDetailsAction =
  ChangeValueAction |
  OpenCreatureValueRangePromptAction |
  CloseCreatureValueRangePromptAction;

export interface ChangeValueAction {
  readonly type: TownMapObjectDetailsActionType.ChangeValue;
  readonly value: TownMapObjectDetails;
}

export const changeValue = (value: TownMapObjectDetails): ChangeValueAction => ({
  type: TownMapObjectDetailsActionType.ChangeValue,
  value,
});

export interface OpenCreatureValueRangePromptAction {
  readonly type: TownMapObjectDetailsActionType.OpenCreatureValueRangePrompt;
}

export const openCreatureValueRangePrompt = (): OpenCreatureValueRangePromptAction => ({
  type: TownMapObjectDetailsActionType.OpenCreatureValueRangePrompt,
});

export interface CloseCreatureValueRangePromptAction {
  readonly type: TownMapObjectDetailsActionType.CloseCreatureValueRangePrompt;
}

export const closeCreatureValueRangePrompt = (): CloseCreatureValueRangePromptAction => ({
  type: TownMapObjectDetailsActionType.CloseCreatureValueRangePrompt,
});
