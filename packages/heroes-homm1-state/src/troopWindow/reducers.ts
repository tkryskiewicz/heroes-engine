import { TroopWindowAction, TroopWindowActionType } from "./actions";
import { TroopWindowState } from "./state";

const initialState: TroopWindowState = {
  dismissPromptVisible: false,
};

export const troopWindowReducer = (
  state: TroopWindowState = initialState,
  action: TroopWindowAction,
): TroopWindowState => {
  switch (action.type) {
    case TroopWindowActionType.OpenDismissPrompt:
      return {
        ...state,
        dismissPromptVisible: true,
      };
    case TroopWindowActionType.CloseDismissPrompt:
      return {
        ...state,
        dismissPromptVisible: false,
      };
    default:
      return state;
  }
};
