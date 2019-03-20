import {
  AdventureScreenActionType,
  changeEndTurnPromptVisible,
  ChangeEndTurnPromptVisibleAction,
  closeHeroTradingWindow,
  CloseHeroTradingWindowAction,
  openHeroTradingWindow,
  OpenHeroTradingWindowAction,
} from "./actions";

describe("adventureScreenActions", () => {
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
