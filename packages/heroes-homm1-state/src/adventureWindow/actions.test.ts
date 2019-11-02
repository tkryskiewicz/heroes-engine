import {
  AdventureWindowActionType,
  changeEndTurnPromptVisible,
  ChangeEndTurnPromptVisibleAction,
  closeHeroTradingWindow,
  CloseHeroTradingWindowAction,
  closeMapObjectDetails,
  CloseMapObjectDetailsAction,
  openHeroTradingWindow,
  OpenHeroTradingWindowAction,
  openMapObjectDetails,
  OpenMapObjectDetailsAction,
} from "./actions";

describe("adventureWindowActions", () => {
  it("should create an action to open map object details", () => {
    const result = openMapObjectDetails("id");

    const expected: OpenMapObjectDetailsAction = {
      id: "id",
      type: AdventureWindowActionType.OpenMapObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close map object details", () => {
    const result = closeMapObjectDetails();

    const expected: CloseMapObjectDetailsAction = {
      type: AdventureWindowActionType.CloseMapObjectDetails,
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
