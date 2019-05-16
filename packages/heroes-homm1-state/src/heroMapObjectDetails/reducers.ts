import { HeroMapObjectDetailsAction, HeroMapObjectDetailsActionType } from "./actions";
import { HeroMapObjectDetailsState } from "./state";

const initialState: HeroMapObjectDetailsState = {
  creatureValueRangePromptVisible: false,
  value: {
    alignment: "",
    army: [],
    artifacts: [],
    experience: 0,
    hero: "",
  },
};

export const heroMapObjectDetailsReducer = (
  state: HeroMapObjectDetailsState = initialState,
  action: HeroMapObjectDetailsAction,
): HeroMapObjectDetailsState => {
  switch (action.type) {
    case HeroMapObjectDetailsActionType.ChangeValue:
      return {
        ...state,
        value: action.value,
      };
    case HeroMapObjectDetailsActionType.OpenCreatureValueRangePrompt:
      return {
        ...state,
        creatureValueRangePromptVisible: true,
      };
    case HeroMapObjectDetailsActionType.CloseCreatureValueRangePrompt:
      return {
        ...state,
        creatureValueRangePromptVisible: false,
      };
    default:
      return state;
  }
};
