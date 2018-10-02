import { HeroWindowAction } from "../heroWindow";
import { HeroWindowActionType } from "../heroWindow/actions";
import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {};

export const locatorsReducer = (
  state: LocatorsState = initialState,
  action: LocatorsAction | HeroWindowAction,
): LocatorsState => {
  switch (action.type) {
    case LocatorsActionType.Select:
      return {
        ...state,
        selectedLocator: action.locator,
      };
    case HeroWindowActionType.Close:
      return {
        ...state,
        selectedLocator: undefined,
      };
    default:
      return state;
  }
};
