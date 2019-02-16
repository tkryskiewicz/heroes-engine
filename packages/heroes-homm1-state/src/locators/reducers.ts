import { LocatorsAction, LocatorsActionType } from "./actions";
import { LocatorsState } from "./state";

const initialState: LocatorsState = {
  heroDetailsVisible: false,
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
    case LocatorsActionType.OpenHeroDetails:
      return {
        ...state,
        heroDetailsVisible: true,
      };
    case LocatorsActionType.CloseHeroDetails:
      return {
        ...state,
        heroDetailsVisible: false,
      };
    default:
      return state;
  }
};
