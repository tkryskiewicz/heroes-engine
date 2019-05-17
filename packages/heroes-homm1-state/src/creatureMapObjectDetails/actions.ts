export enum CreatureMapObjectDetailsActionType {
  ChangeCount = "creatureMapObjectDetails/changeCount",
  OpenCountValueRangePrompt = "creatureMapObjectDetails/openCountValueRangePrompt",
  CloseCountValueRangePrompt = "creatureMapObjectDetails/closeCountValueRangePrompt",
}

export type CreatureMapObjectDetailsAction =
  ChangeCountAction |
  OpenCountValueRangePromptAction |
  CloseCountValueRangePromptAction;

export interface ChangeCountAction {
  readonly type: CreatureMapObjectDetailsActionType.ChangeCount;
  readonly value: number;
}

export const changeCount = (value: number): ChangeCountAction => ({
  type: CreatureMapObjectDetailsActionType.ChangeCount,
  value,
});

export interface OpenCountValueRangePromptAction {
  readonly type: CreatureMapObjectDetailsActionType.OpenCountValueRangePrompt;
}

export const openCountValueRangePrompt = (): OpenCountValueRangePromptAction => ({
  type: CreatureMapObjectDetailsActionType.OpenCountValueRangePrompt,
});

export interface CloseCountValueRangePromptAction {
  readonly type: CreatureMapObjectDetailsActionType.CloseCountValueRangePrompt;
}

export const closeCountValueRangePrompt = (): CloseCountValueRangePromptAction => ({
  type: CreatureMapObjectDetailsActionType.CloseCountValueRangePrompt,
});
