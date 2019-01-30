import { AdventureScreenAction, AdventureScreenActionType } from "./actions";
import { AdventureScreenState } from "./state";

const initialState: AdventureScreenState = {
  endTurnPromptVisible: false,
};

export const adventureScreenReducer = (
  state: AdventureScreenState = initialState,
  action: AdventureScreenAction,
): AdventureScreenState => {
  switch (action.type) {
    case AdventureScreenActionType.ChangeEndTurnPromptVisible:
      return {
        ...state,
        endTurnPromptVisible: action.value,
      };
    default:
      return state;
  }
};
