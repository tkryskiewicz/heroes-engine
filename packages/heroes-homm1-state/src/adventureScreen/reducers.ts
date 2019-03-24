import { AdventureScreenAction, AdventureScreenActionType } from "./actions";
import { AdventureScreenState } from "./state";

const initialState: AdventureScreenState = {
  endTurnPromptVisible: false,
  heroTradingWindowVisible: false,
};

export const adventureScreenReducer = (
  state: AdventureScreenState = initialState,
  action: AdventureScreenAction,
): AdventureScreenState => {
  switch (action.type) {
    case AdventureScreenActionType.OpenMapObjectDetails:
      return {
        ...state,
        visibleMapObjectDetails: action.id,
      };
    case AdventureScreenActionType.CloseMapObjectDetails:
      return {
        ...state,
        visibleMapObjectDetails: undefined,
      };
    case AdventureScreenActionType.ChangeEndTurnPromptVisible:
      return {
        ...state,
        endTurnPromptVisible: action.value,
      };
    case AdventureScreenActionType.OpenHeroTradingScreen:
      return {
        ...state,
        hero: action.hero,
        heroTradingWindowVisible: true,
        otherHero: action.otherHero,
      };
    case AdventureScreenActionType.CloseHeroTradingScreen:
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
