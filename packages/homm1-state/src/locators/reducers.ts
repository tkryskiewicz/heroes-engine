import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {};

export const locatorsReducer = (state: LocatorsState = initialState, action: LocatorsAction): LocatorsState => {
  switch (action.type) {
    case LocatorsActionType.Select:
      return {
        ...state,
        selectedLocator: action.locator,
      };
    default:
      return state;
  }
};
