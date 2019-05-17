import { HeroMapObjectDetails } from "heroes-homm1";

import { changeValue, closeCreatureValueRangePrompt, openCreatureValueRangePrompt } from "./actions";
import { heroMapObjectDetailsReducer } from "./reducers";
import { HeroMapObjectDetailsState } from "./state";

const defaultState: HeroMapObjectDetailsState = {
  creatureValueRangePromptVisible: false,
  value: {
    alignment: "",
    army: [],
    artifacts: [],
    experience: 0,
    hero: "",
  },
};

describe("creatureMapObjectDetailsReducer", () => {
  it("should return initial state", () => {
    const result = heroMapObjectDetailsReducer(undefined, {} as any);

    const expected: HeroMapObjectDetailsState = {
      ...defaultState,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing value", () => {
    const state: HeroMapObjectDetailsState = {
      ...defaultState,
    };

    const value: HeroMapObjectDetails = {
      alignment: "alignment",
      army: [],
      artifacts: [],
      experience: 0,
      hero: "hero",
    };

    const result = heroMapObjectDetailsReducer(state, changeValue(value));

    const expected: HeroMapObjectDetailsState = {
      ...state,
      value,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening creature value range prompt", () => {
    const state: HeroMapObjectDetailsState = {
      ...defaultState,
      creatureValueRangePromptVisible: false,
    };

    const result = heroMapObjectDetailsReducer(state, openCreatureValueRangePrompt());

    const expected: HeroMapObjectDetailsState = {
      ...state,
      creatureValueRangePromptVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing creature value range prompt", () => {
    const state: HeroMapObjectDetailsState = {
      ...defaultState,
      creatureValueRangePromptVisible: true,
    };

    const result = heroMapObjectDetailsReducer(state, closeCreatureValueRangePrompt());

    const expected: HeroMapObjectDetailsState = {
      ...state,
      creatureValueRangePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
