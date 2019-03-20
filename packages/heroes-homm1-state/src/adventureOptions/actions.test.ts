import { AdventureOptionsActionType, close, CloseAction, open, OpenAction } from "./actions";

describe("adventureOptionsActions", () => {
  it("should create an action to open", () => {
    const result = open();

    const expected: OpenAction = {
      type: AdventureOptionsActionType.Open,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close", () => {
    const result = close();

    const expected: CloseAction = {
      type: AdventureOptionsActionType.Close,
    };

    expect(result).toEqual(expected);
  });
});
