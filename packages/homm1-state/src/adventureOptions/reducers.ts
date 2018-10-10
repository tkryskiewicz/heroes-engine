import { AdventureOptionsAction, AdventureOptionsActionType } from "./actions";
import { AdventureOptionsState } from "./state";

const initialState: AdventureOptionsState = {
  visible: false,
};

export const adventureOptionsReducer = (
  state: AdventureOptionsState = initialState,
  action: AdventureOptionsAction,
): AdventureOptionsState => {
  switch (action.type) {
    case AdventureOptionsActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case AdventureOptionsActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
