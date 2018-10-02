import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  visible: false,
};

export const heroWindowReducer = (state: HeroWindowState = initialState, action: HeroWindowAction): HeroWindowState => {
  switch (action.type) {
    case HeroWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case HeroWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
