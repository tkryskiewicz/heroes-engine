import { GameAction, GameActionType } from "../game";
import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  recruitTroopCount: 0,
};

export const townWindowReducer = (
  state: TownWindowState = initialState,
  action: TownWindowAction | GameAction,
): TownWindowState => {
  switch (action.type) {
    case TownWindowActionType.Open:
      return {
        ...state,
        townIndex: action.townIndex,
      };
    case TownWindowActionType.Close:
      return {
        ...initialState,
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
    case GameActionType.RecruitTroop:
      return {
        ...state,
        recruitTroopCount: 0,
        visibleStructureDetails: undefined,
      };
    case TownWindowActionType.OpenOptionDetails:
      return {
        ...state,
        visibleOptionDetails: action.value,
      };
    case TownWindowActionType.CloseOptionDetails:
      return {
        ...state,
        visibleOptionDetails: undefined,
      };
    case TownWindowActionType.ChangeRecruitTroopCount:
      return {
        ...state,
        recruitTroopCount: action.count,
      };
    case GameActionType.BuildStructure:
      return {
        ...state,
        visibleOptionDetails: undefined,
        visibleStructureDetails: undefined,
      };
    default:
      return state;
  }
};
