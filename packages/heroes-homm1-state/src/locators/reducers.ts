import { GameAction, GameActionType } from "../game";
import { HeroWindowAction } from "../heroWindow";
import { HeroWindowActionType } from "../heroWindow/actions";
import { TownWindowAction, TownWindowActionType } from "../townWindow";
import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {};

export const locatorsReducer = (
  state: LocatorsState = initialState,
  action: LocatorsAction | HeroWindowAction | TownWindowAction | GameAction,
): LocatorsState => {
  switch (action.type) {
    case LocatorsActionType.Select:
      return {
        ...state,
        selectedLocator: action.locator,
      };
    case HeroWindowActionType.Close:
    case GameActionType.DismissHero:
    case TownWindowActionType.Close:
      return {
        ...state,
        selectedLocator: undefined,
      };
    default:
      return state;
  }
};
