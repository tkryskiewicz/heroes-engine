import { close, CloseAction, open, OpenAction, ScenarioInfoWindowActionType } from "./actions";

describe("scenarioInfoWindowActions", () => {
  it("should create an action to open", () => {
    const result = open();

    const expected: OpenAction = {
      type: ScenarioInfoWindowActionType.Open,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close", () => {
    const result = close();

    const expected: CloseAction = {
      type: ScenarioInfoWindowActionType.Close,
    };

    expect(result).toEqual(expected);
  });
});
