import { close, CloseAction, GameOptionsActionType, open, OpenAction } from "./actions";

describe("gameOptionsActions", () => {
  it("should create an action to open", () => {
    const result = open();

    const expected: OpenAction = {
      type: GameOptionsActionType.Open,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close", () => {
    const result = close();

    const expected: CloseAction = {
      type: GameOptionsActionType.Close,
    };

    expect(result).toEqual(expected);
  });
});
