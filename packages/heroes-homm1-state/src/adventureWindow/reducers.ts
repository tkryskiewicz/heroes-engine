import { AdventureWindowAction, AdventureWindowActionType } from "./actions";
import { AdventureWindowState } from "./state";

const initialState: AdventureWindowState = {
  endTurnPromptVisible: false,
  heroTradingWindowVisible: false,
  x: 0,
  y: 0,
};

export const adventureWindowReducer = (
  state: AdventureWindowState = initialState,
  action: AdventureWindowAction,
): AdventureWindowState => {
  switch (action.type) {
    case AdventureWindowActionType.OpenObjectDetails:
      return {
        ...state,
        visibleObjectDetails: action.id,
      };
    case AdventureWindowActionType.CloseObjectDetails:
      return {
        ...state,
        visibleObjectDetails: undefined,
      };
    case AdventureWindowActionType.ChangeEndTurnPromptVisible:
      return {
        ...state,
        endTurnPromptVisible: action.value,
      };
    case AdventureWindowActionType.OpenHeroTradingScreen:
      return {
        ...state,
        hero: action.hero,
        heroTradingWindowVisible: true,
        otherHero: action.otherHero,
      };
    case AdventureWindowActionType.CloseHeroTradingScreen:
      return {
        ...state,
        hero: undefined,
        heroTradingWindowVisible: false,
        otherHero: undefined,
      };
    default:
      return state;
  }
};
