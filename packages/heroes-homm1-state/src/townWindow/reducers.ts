import { TownWindowAction, TownWindowActionType } from "./actions";
import { TownWindowState } from "./state";

const initialState: TownWindowState = {
  recruitTroopCount: 0,
  visitingHeroDetailsVisible: false,
};

export const townWindowReducer = (
  state: TownWindowState = initialState,
  action: TownWindowAction,
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
    case TownWindowActionType.DeselectGarrisonTroop:
      return {
        ...state,
        selectedGarrisonTroopIndex: undefined,
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
    case TownWindowActionType.SelectHeroTroop:
      return {
        ...state,
        selectedHeroTroopIndex: action.index,
      };
    case TownWindowActionType.DeselectHeroTroop:
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
