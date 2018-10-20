import { PuzzleWindowAction, PuzzleWindowActionType } from "../puzzleWindow";
import { AdventureOptionsAction, AdventureOptionsActionType } from "./actions";
import { AdventureOptionsState } from "./state";

const initialState: AdventureOptionsState = {
  visible: false,
};

export const adventureOptionsReducer = (
  state: AdventureOptionsState = initialState,
  action: AdventureOptionsAction | PuzzleWindowAction,
): AdventureOptionsState => {
  switch (action.type) {
    case AdventureOptionsActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case AdventureOptionsActionType.Close:
    case PuzzleWindowActionType.Open:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
