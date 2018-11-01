import { GameAction, GameActionType } from "../game";
import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  visible: false,
};

export const townWindowReducer = (
  state: TownWindowState = initialState,
  action: TownWindowAction | GameAction,
): TownWindowState => {
  switch (action.type) {
    case TownWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case TownWindowActionType.Close:
      return {
        ...state,
        visible: false,
      };
    case TownWindowActionType.OpenStructureDetails:
      return {
        ...state,
        visibleStructureDetails: action.structure,
      };
    case TownWindowActionType.CloseStructureDetails:
    case GameActionType.BuildStructure:
      return {
        ...state,
        visibleStructureDetails: undefined,
      };
    default:
      return state;
  }
};
