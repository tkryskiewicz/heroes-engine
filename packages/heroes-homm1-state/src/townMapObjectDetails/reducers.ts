import { TownMapObjectDetailsAction, TownMapObjectDetailsActionType } from "./actions";
import { TownMapObjectDetailsState } from "./state";

const initialState: TownMapObjectDetailsState = {
  creatureValueRangePromptVisible: false,
  value: {
    army: [],
    customized: false,
  },
};

export const townMapObjectDetailsReducer = (
  state: TownMapObjectDetailsState = initialState,
  action: TownMapObjectDetailsAction,
): TownMapObjectDetailsState => {
  switch (action.type) {
    case TownMapObjectDetailsActionType.ChangeValue:
      return {
        ...state,
        value: action.value,
      };
    case TownMapObjectDetailsActionType.OpenCreatureValueRangePrompt:
      return {
        ...state,
        creatureValueRangePromptVisible: true,
      };
    case TownMapObjectDetailsActionType.CloseCreatureValueRangePrompt:
      return {
        ...state,
        creatureValueRangePromptVisible: false,
      };
    default:
      return state;
  }
};
