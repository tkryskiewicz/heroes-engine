import { GameAction, GameActionType } from "../game";
import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  recruitTroopCount: 0,
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
    case TownWindowActionType.SelectGarrisonTroop:
      return {
        ...state,
        selectedGarrisonTroopIndex: action.index,
      };
    case GameActionType.SwapGarrisonTroops:
      return {
        ...state,
        selectedGarrisonTroopIndex: undefined,
      };
    case TownWindowActionType.SelectHeroTroop:
      return {
        ...state,
        selectedHeroTroopIndex: action.index,
      };
    case GameActionType.SwapHeroTroops:
      return {
        ...state,
        selectedHeroTroopIndex: undefined,
      };
    case TownWindowActionType.OpenStructureDetails:
      return {
        ...state,
        visibleStructureDetails: action.structure,
      };
    case TownWindowActionType.CloseStructureDetails:
    case GameActionType.BuildStructure:
    case GameActionType.RecruitTroop:
      return {
        ...state,
        recruitTroopCount: 0,
        visibleStructureDetails: undefined,
      };
    case TownWindowActionType.ChangeRecruitTroopCount:
      return {
        ...state,
        recruitTroopCount: action.count,
      };
    default:
      return state;
  }
};
