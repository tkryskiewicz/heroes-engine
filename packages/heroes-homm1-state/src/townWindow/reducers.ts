import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  visible: false,
};

export const townWindowReducer = (
  state: TownWindowState = initialState,
  action: TownWindowAction,
): TownWindowState => {
  switch (action.type) {
    case TownWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case TownWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
