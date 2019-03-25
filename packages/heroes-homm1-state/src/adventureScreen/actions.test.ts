import {
  AdventureScreenActionType,
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

describe("adventureScreenActions", () => {
  it("should create an action to open map object details", () => {
    const result = openMapObjectDetails("id");

    const expected: OpenMapObjectDetailsAction = {
      id: "id",
      type: AdventureScreenActionType.OpenMapObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close map object details", () => {
    const result = closeMapObjectDetails();

    const expected: CloseMapObjectDetailsAction = {
      type: AdventureScreenActionType.CloseMapObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change end turn prompt visiblility", () => {
    const result = changeEndTurnPromptVisible(true);

    const expected: ChangeEndTurnPromptVisibleAction = {
      type: AdventureScreenActionType.ChangeEndTurnPromptVisible,
      value: true,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open hero trading window", () => {
    const result = openHeroTradingWindow("hero", "otherHero");

    const expected: OpenHeroTradingWindowAction = {
      hero: "hero",
      otherHero: "otherHero",
      type: AdventureScreenActionType.OpenHeroTradingScreen,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close hero trading window", () => {
    const result = closeHeroTradingWindow();

    const expected: CloseHeroTradingWindowAction = {
      type: AdventureScreenActionType.CloseHeroTradingScreen,
    };

    expect(result).toEqual(expected);
  });
});
