import { closeDismissPrompt, openDismissPrompt } from "./actions";
import { troopWindowReducer } from "./reducers";
import { TroopWindowState } from "./state";

describe("troopWindowReducer", () => {
  it("should return initial state", () => {
    const result = troopWindowReducer(undefined, {} as any);

    const expected: TroopWindowState = {
      dismissPromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening dismiss prompt", () => {
    const state: TroopWindowState = {
      dismissPromptVisible: false,
    };

    const result = troopWindowReducer(state, openDismissPrompt());

    const expected: TroopWindowState = {
      dismissPromptVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing dismiss prompt", () => {
    const state: TroopWindowState = {
      dismissPromptVisible: true,
    };

    const result = troopWindowReducer(state, closeDismissPrompt());

    const expected: TroopWindowState = {
      dismissPromptVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
