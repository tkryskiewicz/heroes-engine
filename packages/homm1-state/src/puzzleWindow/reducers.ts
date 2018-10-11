import { PuzzleWindowAction, PuzzleWindowActionType } from "./actions";
import { PuzzleWindowState } from "./state";

const initialState: PuzzleWindowState = {
  visible: false,
};

export const puzzleWindowReducer = (
  state: PuzzleWindowState = initialState,
  action: PuzzleWindowAction,
): PuzzleWindowState => {
  switch (action.type) {
    case PuzzleWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case PuzzleWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
