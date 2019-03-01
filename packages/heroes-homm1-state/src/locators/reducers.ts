import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {
  locatorDetailsVisible: false,
};

export const locatorsReducer = (
  state: LocatorsState = initialState,
  action: LocatorsAction,
): LocatorsState => {
  switch (action.type) {
    case LocatorsActionType.Select:
      return {
        ...state,
        selectedLocator: action.locator,
      };
    case LocatorsActionType.Deselect:
      return {
        ...state,
        selectedLocator: undefined,
      };
    case LocatorsActionType.OpenLocatorDetails:
      return {
        ...state,
        locatorDetailsVisible: true,
      };
    case LocatorsActionType.CloseLocatorDetails:
      return {
        ...state,
        locatorDetailsVisible: false,
      };
    default:
      return state;
  }
};
