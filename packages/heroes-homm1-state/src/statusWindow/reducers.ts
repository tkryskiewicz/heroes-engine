import { StatusWindowAction, StatusWindowActionType } from "./actions";
import { StatusWindowOption, StatusWindowState } from "./state";

const initialState: StatusWindowState = {
  selectedOption: StatusWindowOption.ResourceSummary,
};

export const statusWindowReducer = (
  state: StatusWindowState = initialState,
  action: StatusWindowAction,
): StatusWindowState => {
  switch (action.type) {
    case StatusWindowActionType.ChangeSelectedOption:
      return {
        ...state,
        selectedOption: action.value,
      };
    case StatusWindowActionType.SetDefaultOption:
      return {
        ...state,
        selectedOption: initialState.selectedOption,
      };
    default:
      return state;
  }
};
