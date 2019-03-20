import { MageGuildWindowAction, MageGuildWindowActionType } from "./actions";
import { MageGuildWindowState } from "./state";

const initialState: MageGuildWindowState = {};

export const mageGuildWindowReducer = (
  state: MageGuildWindowState = initialState,
  action: MageGuildWindowAction,
): MageGuildWindowState => {
  switch (action.type) {
    case MageGuildWindowActionType.ChangeVisibleSpellDetails:
      return {
        ...state,
        visibleSpellDetail: action.spell,
      };
    default:
      return state;
  }
};
