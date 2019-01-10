import { SpellType } from "heroes-homm1";

import { HeroWindowAction, HeroWindowActionType } from "../heroWindow";
import { SpellBookWindowAction, SpellBookWindowActionType } from "./actions";
import { SpellBookWindowState } from "./state";

const initialState: SpellBookWindowState = {
  page: 0,
  spellType: SpellType.Combat,
};

export const spellBookWindowReducer = (
  state: SpellBookWindowState = initialState,
  action: SpellBookWindowAction | HeroWindowAction,
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
    case HeroWindowActionType.ChangeVisibleArtifactDescription:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
