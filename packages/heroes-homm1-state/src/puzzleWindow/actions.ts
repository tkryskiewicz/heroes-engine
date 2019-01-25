export enum PuzzleWindowActionType {
  Open = "puzzleWindow/open",
  Close = "puzzleWindow/close",
}

export type PuzzleWindowAction =
  OpenPuzzleWindowAction |
  ClosePuzzleWindowAction;

export interface OpenPuzzleWindowAction {
  readonly type: PuzzleWindowActionType.Open;
}

export const openPuzzleWindow = (): OpenPuzzleWindowAction => ({
  type: PuzzleWindowActionType.Open,
});

export interface ClosePuzzleWindowAction {
  readonly type: PuzzleWindowActionType.Close;
}

export const closePuzzleWindow = (): ClosePuzzleWindowAction => ({
  type: PuzzleWindowActionType.Close,
});
