import { GameAction, GameActionType } from "../game";
import { HeroWindowAction, HeroWindowActionType } from "./actions";
import { HeroWindowState } from "./state";

const initialState: HeroWindowState = {
  dismissHeroPromptVisible: false,
  statusText: "",
  visible: false,
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
    case GameActionType.SwapHeroTroops:
      return {
        ...state,
        selectedTroopIndex: undefined,
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
    case HeroWindowActionType.ChangeStatusText:
      return {
        ...state,
        statusText: action.value,
      };
    default:
      return state;
  }
};
