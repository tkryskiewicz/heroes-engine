import { changeCount, closeCountValueRangePrompt, openCountValueRangePrompt } from "./actions";
import { creatureMapObjectDetailsReducer } from "./reducers";
import { CreatureMapObjectDetailsState } from "./state";

const defaultState: CreatureMapObjectDetailsState = {
  count: 0,
  countValueRangePromptVisible: false,
};

describe("creatureMapObjectDetailsReducer", () => {
  it("should return initial state", () => {
    const result = creatureMapObjectDetailsReducer(undefined, {} as any);

    const expected: CreatureMapObjectDetailsState = {
      ...defaultState,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing count", () => {
    const state: CreatureMapObjectDetailsState = {
      ...defaultState,
      count: 0,
    };

    const result = creatureMapObjectDetailsReducer(state, changeCount(1));

    const expected: CreatureMapObjectDetailsState = {
      ...state,
      count: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening count value range prompt", () => {
    const state: CreatureMapObjectDetailsState = {
      ...defaultState,
      countValueRangePromptVisible: false,
    };

    const result = creatureMapObjectDetailsReducer(state, openCountValueRangePrompt());

    const expected: CreatureMapObjectDetailsState = {
      ...state,
      countValueRangePromptVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing count value range prompt", () => {
    const state: CreatureMapObjectDetailsState = {
      ...defaultState,
      countValueRangePromptVisible: true,
    };

    const result = creatureMapObjectDetailsReducer(state, closeCountValueRangePrompt());

    const expected: CreatureMapObjectDetailsState = {
      ...state,
      countValueRangePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
