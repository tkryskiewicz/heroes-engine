import { SpellType } from "heroes-homm1";

import { SpellBookWindowAction, SpellBookWindowActionType } from "./actions";
import { SpellBookWindowState } from "./state";

const initialState: SpellBookWindowState = {
  page: 0,
  spellType: SpellType.Combat,
};

export const spellBookWindowReducer = (
  state: SpellBookWindowState = initialState,
  action: SpellBookWindowAction,
): SpellBookWindowState => {
  switch (action.type) {
    case SpellBookWindowActionType.ChangeSpellType:
      return {
        ...state,
        spellType: action.value,
      };
    case SpellBookWindowActionType.ChangePage:
      return {
        ...state,
        page: action.value,
      };
    case SpellBookWindowActionType.ChangeVisibleSpellDetails:
      return {
        ...state,
        visibleSpellDetails: action.spell,
      };
    case SpellBookWindowActionType.Reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
