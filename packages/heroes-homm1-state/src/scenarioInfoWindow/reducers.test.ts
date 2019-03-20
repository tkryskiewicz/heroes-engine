import { close, open } from "./actions";
import { scenarioInfoWindowReducer } from "./reducers";
import { ScenarioInfoWindowState } from "./state";

describe("scenarioInfoWindowReducer", () => {
  it("should return initial state", () => {
    const result = scenarioInfoWindowReducer(undefined, {} as any);

    const expected: ScenarioInfoWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening", () => {
    const state: ScenarioInfoWindowState = {
      visible: false,
    };

    const result = scenarioInfoWindowReducer(state, open());

    const expected: ScenarioInfoWindowState = {
      visible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing", () => {
    const state: ScenarioInfoWindowState = {
      visible: true,
    };

    const result = scenarioInfoWindowReducer(state, close());

    const expected: ScenarioInfoWindowState = {
      visible: false,
    };

    expect(result).toEqual(expected);
  });
});
