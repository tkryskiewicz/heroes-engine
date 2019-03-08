import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  dismissHeroPromptVisible: false,
  visibleTroopDetails: false,
};

export const heroWindowReducer = (
  state: HeroWindowState = initialState,
  action: HeroWindowAction,
): HeroWindowState => {
  switch (action.type) {
    case HeroWindowActionType.ChangeVisibleSkillDetails:
      return {
        ...state,
        visibleSkillDetails: action.skill,
      };
    case HeroWindowActionType.ChangeVisibleAdditionalStatDetails:
      return {
        ...state,
        visibleAdditionalStatDetails: action.stat,
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
    case HeroWindowActionType.Reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
