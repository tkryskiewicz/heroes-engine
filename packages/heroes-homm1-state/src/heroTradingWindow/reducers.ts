import { HeroTradingWindowAction, HeroTradingWindowActionType } from "./actions";
import { HeroTradingWindowState } from "./state";

const initialState: HeroTradingWindowState = {
  artifactDetailsVisible: false,
  artifactNotTradablePromptVisible: false,
};

export const heroTradingWindowReducer = (
  state: HeroTradingWindowState = initialState,
  action: HeroTradingWindowAction,
): HeroTradingWindowState => {
  switch (action.type) {
    case HeroTradingWindowActionType.OpenHeroDetails:
      return {
        ...state,
        visibleHeroDetails: action.hero,
      };
    case HeroTradingWindowActionType.CloseHeroDetails:
      return {
        ...state,
        visibleHeroDetails: undefined,
      };
    case HeroTradingWindowActionType.SelectTroop:
      return {
        ...state,
        selectedTroop: action.troop,
      };
    case HeroTradingWindowActionType.DeselectTroop:
      return {
        ...state,
        selectedTroop: undefined,
      };
    case HeroTradingWindowActionType.SelectArtifact:
      return {
        ...state,
        selectedArtifact: action.artifact,
      };
    case HeroTradingWindowActionType.DeselectArtifact:
      return {
        ...state,
        selectedArtifact: undefined,
      };
    case HeroTradingWindowActionType.OpenArtifactDetails:
      return {
        ...state,
        artifactDetailsVisible: true,
      };
    case HeroTradingWindowActionType.CloseArtifactDetails:
      return {
        ...state,
        artifactDetailsVisible: false,
      };
    case HeroTradingWindowActionType.OpenArtifactNotTradablePrompt:
      return {
        ...state,
        artifactNotTradablePromptVisible: true,
      };
    case HeroTradingWindowActionType.CloseArtifactNotTradablePrompt:
      return {
        ...state,
        artifactNotTradablePromptVisible: false,
      };
    default:
      return state;
  }
};
