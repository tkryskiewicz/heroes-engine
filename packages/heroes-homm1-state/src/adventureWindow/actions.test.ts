import {
  AdventureWindowActionType,
  changeEndTurnPromptVisible,
  ChangeEndTurnPromptVisibleAction,
  closeHeroTradingWindow,
  CloseHeroTradingWindowAction,
  closeObjectDetails,
  CloseObjectDetailsAction,
  openHeroTradingWindow,
  OpenHeroTradingWindowAction,
  openObjectDetails,
  OpenObjectDetailsAction,
} from "./actions";

describe("adventureWindowActions", () => {
  it("should create an action to open object details", () => {
    const result = openObjectDetails("id");

    const expected: OpenObjectDetailsAction = {
      id: "id",
      type: AdventureWindowActionType.OpenObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close object details", () => {
    const result = closeObjectDetails();

    const expected: CloseObjectDetailsAction = {
      type: AdventureWindowActionType.CloseObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change end turn prompt visiblility", () => {
    const result = changeEndTurnPromptVisible(true);

    const expected: ChangeEndTurnPromptVisibleAction = {
      type: AdventureWindowActionType.ChangeEndTurnPromptVisible,
      value: true,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open hero trading window", () => {
    const result = openHeroTradingWindow("hero", "otherHero");

    const expected: OpenHeroTradingWindowAction = {
      hero: "hero",
      otherHero: "otherHero",
      type: AdventureWindowActionType.OpenHeroTradingScreen,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close hero trading window", () => {
    const result = closeHeroTradingWindow();

    const expected: CloseHeroTradingWindowAction = {
      type: AdventureWindowActionType.CloseHeroTradingScreen,
    };

    expect(result).toEqual(expected);
  });
});
