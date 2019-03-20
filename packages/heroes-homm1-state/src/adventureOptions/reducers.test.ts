import { close, open } from "./actions";
import { adventureOptionsReducer } from "./reducers";
import { AdventureOptionsState } from "./state";

describe("adventureOptionsReducer", () => {
  it("should return initial state", () => {
    const result = adventureOptionsReducer(undefined, {} as any);

    const expected: AdventureOptionsState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening", () => {
    const state: AdventureOptionsState = {
      visible: false,
    };

    const result = adventureOptionsReducer(state, open());

    const expected: AdventureOptionsState = {
      visible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing", () => {
    const state: AdventureOptionsState = {
      visible: true,
    };

    const result = adventureOptionsReducer(state, close());

    const expected: AdventureOptionsState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });
});
