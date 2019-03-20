import { close, CloseAction, KingdomOverviewWindowActionType, open, OpenAction } from "./actions";

describe("kingdomOverviewWindowActions", () => {
  it("should create an action to ", () => {
    const result = open();

    const expected: OpenAction = {
      type: KingdomOverviewWindowActionType.Open,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close", () => {
    const result = close();

    const expected: CloseAction = {
      type: KingdomOverviewWindowActionType.Close,
    };

    expect(result).toEqual(expected);
  });
});
