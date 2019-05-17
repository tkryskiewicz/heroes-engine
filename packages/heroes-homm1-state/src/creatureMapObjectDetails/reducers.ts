import { CreatureMapObjectDetailsAction, CreatureMapObjectDetailsActionType } from "./actions";
import { CreatureMapObjectDetailsState } from "./state";

const initialState: CreatureMapObjectDetailsState = {
  count: 0,
  countValueRangePromptVisible: false,
};

export const creatureMapObjectDetailsReducer = (
  state: CreatureMapObjectDetailsState = initialState,
  action: CreatureMapObjectDetailsAction,
): CreatureMapObjectDetailsState => {
  switch (action.type) {
    case CreatureMapObjectDetailsActionType.ChangeCount:
      return {
        ...state,
        count: action.value,
      };
    case CreatureMapObjectDetailsActionType.OpenCountValueRangePrompt:
      return {
        ...state,
        countValueRangePromptVisible: true,
      };
    case CreatureMapObjectDetailsActionType.CloseCountValueRangePrompt:
      return {
        ...state,
        countValueRangePromptVisible: false,
      };
    default:
      return state;
  }
};
