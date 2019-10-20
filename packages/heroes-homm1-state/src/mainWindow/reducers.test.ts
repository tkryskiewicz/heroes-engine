import { closeCredits, openCredits } from "./actions";
import { mainWindowReducer } from "./reducers";
import { MainWindowState } from "./state";

describe("mainWindowReducer", () => {
  it("should return initial state", () => {
    const result = mainWindowReducer(undefined, {} as any);

    const expected: MainWindowState = {
      creditsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening credits", () => {
    const state: MainWindowState = {
      creditsVisible: false,
    };

    const result = mainWindowReducer(state, openCredits());

    const expected: MainWindowState = {
      creditsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing credits", () => {
    const state: MainWindowState = {
      creditsVisible: true,
    };

    const result = mainWindowReducer(state, closeCredits());

    const expected: MainWindowState = {
      creditsVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
