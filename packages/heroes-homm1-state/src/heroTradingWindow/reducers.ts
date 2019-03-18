import { HeroTradingWindowAction, HeroTradingWindowActionType } from "./actions";
import { HeroTradingWindowState } from "./state";

const initialState: HeroTradingWindowState = {};

export const heroTradingWindowReducer = (
  state: HeroTradingWindowState = initialState,
  action: HeroTradingWindowAction,
): HeroTradingWindowState => {
  switch (action.type) {
    case HeroTradingWindowActionType.SelectTroop:
      return {
        ...state,
        selectedTroop: action.troop,
      };
    case HeroTradingWindowActionType.DeselectTroop:
      return {
        ...state,
        selectedTroop: undefined,
      };
    default:
      return state;
  }
};
