import { ScenarioInfoWindowAction, ScenarioInfoWindowActionType } from "../scenarioInfoWindow";
import { GameOptionsAction, GameOptionsActionType } from "./actions";
import { GameOptionsState } from "./state";

const initialState: GameOptionsState = {
  visible: false,
};

export const gameOptionsReducer = (
  state: GameOptionsState = initialState,
  action: GameOptionsAction | ScenarioInfoWindowAction,
): GameOptionsState => {
  switch (action.type) {
    case GameOptionsActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case GameOptionsActionType.Close:
    case ScenarioInfoWindowActionType.Open:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
