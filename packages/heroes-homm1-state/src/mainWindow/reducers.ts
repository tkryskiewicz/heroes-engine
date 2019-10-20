import { MainWindowAction, MainWindowActionType } from "./actions";
import { MainWindowState } from "./state";

const initialState: MainWindowState = {
  creditsVisible: false,
};

export const mainWindowReducer = (
  state: MainWindowState = initialState,
  action: MainWindowAction,
): MainWindowState => {
  switch (action.type) {
    case MainWindowActionType.OpenCredits:
      return {
        ...state,
        creditsVisible: true,
      };
    case MainWindowActionType.CloseCredits:
        return {
          ...state,
          creditsVisible: false,
        };
    default:
      return state;
  }
};
