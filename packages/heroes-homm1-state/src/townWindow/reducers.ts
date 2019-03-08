import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  recruitTroopCount: 0,
  troopDetailsVisible: false,
  visitingHeroDetailsVisible: false,
};

export const townWindowReducer = (
  state: TownWindowState = initialState,
  action: TownWindowAction,
): TownWindowState => {
  switch (action.type) {
    case TownWindowActionType.SelectTroop:
      return {
        ...state,
        selectedTroop: action.troop,
      };
    case TownWindowActionType.DeselectTroop:
      return {
        ...state,
        selectedTroop: undefined,
      };
    case TownWindowActionType.OpenTroopDetails:
      return {
        ...state,
        troopDetailsVisible: true,
      };
    case TownWindowActionType.CloseTroopDetails:
      return {
        ...state,
        troopDetailsVisible: false,
      };
    case TownWindowActionType.OpenVisitingHeroDetails:
      return {
        ...state,
        visitingHeroDetailsVisible: true,
      };
    case TownWindowActionType.CloseVisitingHeroDetails:
      return {
        ...state,
        visitingHeroDetailsVisible: false,
      };
    case TownWindowActionType.OpenStructureDetails:
      return {
        ...state,
        visibleStructureDetails: action.structure,
      };
    case TownWindowActionType.CloseStructureDetails:
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
    default:
      return state;
  }
};
