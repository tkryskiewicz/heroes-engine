import {
  closeDismissPrompt,
  CloseDismissPromptAction,
  openDismissPrompt,
  OpenDismissPromptAction,
  TroopWindowActionType,
} from "./actions";

describe("troopWindowActions", () => {
  it("should create an action to open dismiss prompt", () => {
    const result = openDismissPrompt();

    const expected: OpenDismissPromptAction = {
      type: TroopWindowActionType.OpenDismissPrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close dismiss prompt", () => {
    const result = closeDismissPrompt();

    const expected: CloseDismissPromptAction = {
      type: TroopWindowActionType.CloseDismissPrompt,
    };

    expect(result).toEqual(expected);
  });
});
