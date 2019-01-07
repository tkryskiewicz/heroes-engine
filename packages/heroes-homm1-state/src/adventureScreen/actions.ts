export enum AdventureScreenActionType {
  ChangeEndTurnPromptVisible = "adventureScreen/changeEndTurnPromptVisible",
}

export type AdventureScreenAction =
  ChangeEndTurnPromptVisibleAction;

export interface ChangeEndTurnPromptVisibleAction {
  type: AdventureScreenActionType.ChangeEndTurnPromptVisible;
  value: boolean;
}

export const changeEndTurnPromptVisible = (value: boolean): ChangeEndTurnPromptVisibleAction => ({
  type: AdventureScreenActionType.ChangeEndTurnPromptVisible,
  value,
});
