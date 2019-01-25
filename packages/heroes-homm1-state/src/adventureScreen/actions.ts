export enum AdventureScreenActionType {
  ChangeEndTurnPromptVisible = "adventureScreen/changeEndTurnPromptVisible",
}

export type AdventureScreenAction =
  ChangeEndTurnPromptVisibleAction;

export interface ChangeEndTurnPromptVisibleAction {
  readonly type: AdventureScreenActionType.ChangeEndTurnPromptVisible;
  readonly value: boolean;
}

export const changeEndTurnPromptVisible = (value: boolean): ChangeEndTurnPromptVisibleAction => ({
  type: AdventureScreenActionType.ChangeEndTurnPromptVisible,
  value,
});
