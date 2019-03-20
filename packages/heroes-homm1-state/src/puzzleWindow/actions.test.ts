import { close, CloseAction, open, OpenAction, PuzzleWindowActionType } from "./actions";

describe("puzzleWindowActions", () => {
  it("should create an action to open", () => {
    const result = open();

    const expected: OpenAction = {
      type: PuzzleWindowActionType.Open,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close", () => {
    const result = close();

    const expected: CloseAction = {
      type: PuzzleWindowActionType.Close,
    };

    expect(result).toEqual(expected);
  });
});
