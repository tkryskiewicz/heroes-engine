import { HeroMapObjectDetails } from "heroes-homm1";

import { HeroMapObjectDetailsAction, HeroMapObjectDetailsActionType } from "./actions";
import { HeroMapObjectDetailsState } from "./state";

const initialState: HeroMapObjectDetails = {
  alignment: "",
  army: [],
  artifacts: [],
  experience: 0,
  hero: "",
};

export const heroMapObjectDetailsReducer = (
  state: HeroMapObjectDetailsState = initialState,
  action: HeroMapObjectDetailsAction,
): HeroMapObjectDetailsState => {
  switch (action.type) {
    case HeroMapObjectDetailsActionType.ChangeValue:
      return action.value;
    default:
      return state;
  }
};
