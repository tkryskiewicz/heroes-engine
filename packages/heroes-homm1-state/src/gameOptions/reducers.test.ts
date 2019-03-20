import { close, open } from "./actions";
import { gameOptionsReducer } from "./reducers";
import { GameOptionsState } from "./state";

describe("gameOptionsReducer", () => {
  it("should return initial state", () => {
    const result = gameOptionsReducer(undefined, {} as any);

    const expected: GameOptionsState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening", () => {
    const state: GameOptionsState = {
      visible: false,
    };

    const result = gameOptionsReducer(state, open());

    const expected: GameOptionsState = {
      visible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing", () => {
    const state: GameOptionsState = {
      visible: true,
    };

    const result = gameOptionsReducer(state, close());

    const expected: GameOptionsState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });
});
