import { GameAction, GameActionType } from "../game";
import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  dismissHeroPromptVisible: false,
  dismissTroopPromptVisisble: false,
  visible: false,
  visibleTroopDetails: false,
};

export const heroWindowReducer = (
  state: HeroWindowState = initialState,
  action: HeroWindowAction | GameAction,
): HeroWindowState => {
  switch (action.type) {
    case HeroWindowActionType.Open:
      return {
        ...state,
        visible: true,
      };
    case HeroWindowActionType.Close:
    case GameActionType.DismissHero:
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
    case GameActionType.DismissHeroTroop:
      return {
        ...state,
        dismissTroopPromptVisisble: false,
        selectedTroopIndex: undefined,
        visibleTroopDetails: false,
      };
    case GameActionType.SwapHeroTroops:
      return {
        ...state,
        selectedTroopIndex: undefined,
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
