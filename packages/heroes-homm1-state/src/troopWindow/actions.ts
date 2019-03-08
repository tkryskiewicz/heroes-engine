export enum TroopWindowActionType {
  OpenDismissPrompt = "troopWindow/openDismissPrompt",
  CloseDismissPrompt = "troopWindow/closeDismissPrompt",
}

export type TroopWindowAction =
  OpenDismissPromptAction |
  CloseDismissPromptAction;

export interface OpenDismissPromptAction {
  readonly type: TroopWindowActionType.OpenDismissPrompt;
}

export const openDismissPrompt = (): OpenDismissPromptAction => ({
  type: TroopWindowActionType.OpenDismissPrompt,
});

export interface CloseDismissPromptAction {
  readonly type: TroopWindowActionType.CloseDismissPrompt;
}

export const closeDismissPrompt = (): CloseDismissPromptAction => ({
  type: TroopWindowActionType.CloseDismissPrompt,
});
