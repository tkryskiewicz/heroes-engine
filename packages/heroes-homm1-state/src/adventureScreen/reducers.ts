import { GameAction, GameActionType } from "../game";
import { AdventureScreenAction, AdventureScreenActionType } from "./actions";
import { AdventureScreenState } from "./state";

const initialState: AdventureScreenState = {
  endTurnPromptVisible: false,
};

export const adventureScreenReducer = (
  state: AdventureScreenState = initialState,
  action: AdventureScreenAction | GameAction,
): AdventureScreenState => {
  switch (action.type) {
    case AdventureScreenActionType.ChangeEndTurnPromptVisible:
      return {
        ...state,
        endTurnPromptVisible: action.value,
      };
    case GameActionType.EndTurn:
      return {
        ...state,
        endTurnPromptVisible: false,
      };
    default:
      return state;
  }
};
