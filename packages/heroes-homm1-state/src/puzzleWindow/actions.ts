export enum PuzzleWindowActionType {
  Open = "puzzleWindow/open",
  Close = "puzzleWindow/close",
}

export type PuzzleWindowAction =
  OpenAction |
  CloseAction;

export interface OpenAction {
  readonly type: PuzzleWindowActionType.Open;
}

export const open = (): OpenAction => ({
  type: PuzzleWindowActionType.Open,
});

export interface CloseAction {
  readonly type: PuzzleWindowActionType.Close;
}

export const close = (): CloseAction => ({
  type: PuzzleWindowActionType.Close,
});
