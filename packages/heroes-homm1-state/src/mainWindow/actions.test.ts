import { closeCredits, CloseCreditsAction, MainWindowActionType, openCredits, OpenCreditsAction } from "./actions";

describe("mainWindowActions", () => {
  it("should create an action to open credits", () => {
    const result = openCredits();

    const expected: OpenCreditsAction = {
      type: MainWindowActionType.OpenCredits,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close credits", () => {
    const result = closeCredits();

    const expected: CloseCreditsAction = {
      type: MainWindowActionType.CloseCredits,
    };

    expect(result).toEqual(expected);
  });
});
