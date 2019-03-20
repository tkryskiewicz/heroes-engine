import { close, open } from "./actions";
import { kingdomOverviewWindowReducer } from "./reducers";
import { KingdomOverviewWindowState } from "./state";

describe("kingdomOverviewWindowReducer", () => {
  it("should return initial state", () => {
    const result = kingdomOverviewWindowReducer(undefined, {} as any);

    const expected: KingdomOverviewWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening", () => {
    const state: KingdomOverviewWindowState = {
      visible: false,
    };

    const result = kingdomOverviewWindowReducer(state, open());

    const expected: KingdomOverviewWindowState = {
      visible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing", () => {
    const state: KingdomOverviewWindowState = {
      visible: true,
    };

    const result = kingdomOverviewWindowReducer(state, close());

    const expected: KingdomOverviewWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });
});
