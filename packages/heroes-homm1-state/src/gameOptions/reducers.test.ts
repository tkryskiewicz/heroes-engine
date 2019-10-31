import { GameOption } from "heroes-homm1";

import { closeEndGamePrompt, openEndGamePrompt } from "./actions";
import { gameOptionsReducer } from "./reducers";
import { GameOptionsState } from "./state";

describe("gameOptionsReducer", () => {
  it("should return initial state", () => {
    const result = gameOptionsReducer(undefined, {} as any);

    const expected: GameOptionsState = {};

    expect(result).toEqual(expected);
  });

  it("should handle opening end game prompt", () => {
    const state: GameOptionsState = {};

    const result = gameOptionsReducer(state, openEndGamePrompt(GameOption.NewGame));

    const expected: GameOptionsState = {
      ...state,
      endGameOption: GameOption.NewGame,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing end game prompt", () => {
    const state: GameOptionsState = {
      endGameOption: GameOption.NewGame,
    };

    const result = gameOptionsReducer(state, closeEndGamePrompt());

    const expected: GameOptionsState = {
      ...state,
      endGameOption: undefined,
    };

    expect(result).toEqual(expected);
  });
});
