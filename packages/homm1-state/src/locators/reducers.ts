import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {};

export const locatorsReducer = (state: LocatorsState = initialState, action: LocatorsAction): LocatorsState => {
  switch (action.type) {
    case LocatorsActionType.Select:
      return {
        ...state,
        selectedIndex: action.index,
      };
    default:
      return state;
  }
};
