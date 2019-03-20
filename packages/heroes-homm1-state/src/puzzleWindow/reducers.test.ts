import { close, open } from "./actions";
import { puzzleWindowReducer } from "./reducers";
import { PuzzleWindowState } from "./state";

describe("puzzleWindowReducer", () => {
  it("should return initial state", () => {
    const result = puzzleWindowReducer(undefined, {} as any);

    const expected: PuzzleWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening", () => {
    const state: PuzzleWindowState = {
      visible: false,
    };

    const result = puzzleWindowReducer(state, open());

    const expected: PuzzleWindowState = {
      visible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing", () => {
    const state: PuzzleWindowState = {
      visible: true,
    };

    const result = puzzleWindowReducer(state, close());

    const expected: PuzzleWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });
});
