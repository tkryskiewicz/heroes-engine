import { ScenarioInfoWindowAction, ScenarioInfoWindowActionType } from "./actions";
import { ScenarioInfoWindowState } from "./state";

const initialState: ScenarioInfoWindowState = {
  visible: false,
};

export const scenarioInfoWindowReducer = (
  state: ScenarioInfoWindowState = initialState,
  action: ScenarioInfoWindowAction,
): ScenarioInfoWindowState => {
  switch (action.type) {
    case ScenarioInfoWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case ScenarioInfoWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
