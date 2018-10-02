import { GameAction, GameActionType } from "../game";
import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  visible: false,
};

export const heroWindowReducer = (
  state: HeroWindowState = initialState,
  action: HeroWindowAction | GameAction,
): HeroWindowState => {
  switch (action.type) {
    case HeroWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case HeroWindowActionType.Close:
      // TODO: is it ok to use initialState???
      return {
        ...initialState,
      };
    case HeroWindowActionType.SelectTroop:
      return {
        ...state,
        selectedTroopIndex: action.index,
      };
    case GameActionType.SwapHeroTroops:
      return {
        ...state,
        selectedTroopIndex: undefined,
      };
    default:
      return state;
  }
};
