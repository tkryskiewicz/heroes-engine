import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  dismissHeroPromptVisible: false,
  dismissTroopPromptVisisble: false,
  visibleTroopDetails: false,
};

export const heroWindowReducer = (
  state: HeroWindowState = initialState,
  action: HeroWindowAction,
): HeroWindowState => {
  switch (action.type) {
    case HeroWindowActionType.Open:
      return {
        ...state,
        heroIndex: action.heroIndex,
      };
    case HeroWindowActionType.Close:
      return {
        ...initialState,
      };
    case HeroWindowActionType.ChangeVisibleSkillDetails:
      return {
        ...state,
        visibleSkillDetails: action.skill,
      };
    case HeroWindowActionType.ChangeVisibleMiscInfoDetails:
      return {
        ...state,
        visibleMiscInfoDetails: action.infoType,
      };
    case HeroWindowActionType.SelectTroop:
      return {
        ...state,
        selectedTroopIndex: action.index,
      };
    case HeroWindowActionType.DeselectTroop:
      return {
        ...state,
        selectedTroopIndex: undefined,
      };
    case HeroWindowActionType.OpenTroopDetails:
      return {
        ...state,
        selectedTroopIndex: action.index,
        visibleTroopDetails: true,
      };
    case HeroWindowActionType.CloseTroopDetails:
      return {
        ...state,
        selectedTroopIndex: undefined,
        visibleTroopDetails: false,
      };
    case HeroWindowActionType.OpenDismissTroopPrompt:
      return {
        ...state,
        dismissTroopPromptVisisble: true,
      };
    case HeroWindowActionType.CloseDismissTroopPrompt:
      return {
        ...state,
        dismissTroopPromptVisisble: false,
      };
    case HeroWindowActionType.ChangeVisibleArtifactDetails:
      return {
        ...state,
        visibleArtifactDetails: action.index,
      };
    case HeroWindowActionType.OpenDismissHeroPrompt:
      return {
        ...state,
        dismissHeroPromptVisible: true,
      };
    case HeroWindowActionType.CloseDismissHeroPrompt:
      return {
        ...state,
        dismissHeroPromptVisible: false,
      };
    default:
      return state;
  }
};
