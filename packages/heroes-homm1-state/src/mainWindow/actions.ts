export enum MainWindowActionType {
  OpenCredits = "mainWindow/openCredits",
  CloseCredits = "mainWindow/closeCredits",
}

export type MainWindowAction =
  OpenCreditsAction |
  CloseCreditsAction;

export interface OpenCreditsAction {
  readonly type: MainWindowActionType.OpenCredits;
}

export const openCredits = (): OpenCreditsAction => ({
  type: MainWindowActionType.OpenCredits,
});

export interface CloseCreditsAction {
  readonly type: MainWindowActionType.CloseCredits;
}

export const closeCredits = (): CloseCreditsAction => ({
  type: MainWindowActionType.CloseCredits,
});
