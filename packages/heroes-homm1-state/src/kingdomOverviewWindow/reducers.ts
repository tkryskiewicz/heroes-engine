import { KingdomOverviewWindowAction, KingdomOverviewWindowActionType } from "./actions";
import { KingdomOverviewWindowState } from "./state";

const initialState: KingdomOverviewWindowState = {
  visible: false,
};

export const kingdomOverviewWindowReducer = (
  state: KingdomOverviewWindowState = initialState,
  action: KingdomOverviewWindowAction,
): KingdomOverviewWindowState => {
  switch (action.type) {
    case KingdomOverviewWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case KingdomOverviewWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
