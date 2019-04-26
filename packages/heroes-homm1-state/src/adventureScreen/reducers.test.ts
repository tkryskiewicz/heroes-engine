import {
  changeEndTurnPromptVisible,
  closeHeroTradingWindow,
  closeMapObjectDetails,
  openHeroTradingWindow,
  openMapObjectDetails,
} from "./actions";
import { adventureScreenReducer } from "./reducers";
import { AdventureScreenState } from "./state";

describe("adventureScreenReducer", () => {
  it("should return initial state", () => {
    const result = adventureScreenReducer(undefined, {} as any);

    const expected: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening map object details", () => {
    const state: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureScreenReducer(state, openMapObjectDetails("id"));

    const expected: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      visibleMapObjectDetails: "id",
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing map object details", () => {
    const state: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      visibleMapObjectDetails: "id",
      x: 0,
      y: 0,
    };

    const result = adventureScreenReducer(state, closeMapObjectDetails());

    const expected: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing end turn prompt visibility", () => {
    const state: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureScreenReducer(state, changeEndTurnPromptVisible(true));

    const expected: AdventureScreenState = {
      endTurnPromptVisible: true,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening hero trading window", () => {
    const state: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureScreenReducer(state, openHeroTradingWindow("hero", "otherHero"));

    const expected: AdventureScreenState = {
      endTurnPromptVisible: false,
      hero: "hero",
      heroTradingWindowVisible: true,
      otherHero: "otherHero",
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing hero trading window", () => {
    const state: AdventureScreenState = {
      endTurnPromptVisible: false,
      hero: "hero",
      heroTradingWindowVisible: true,
      otherHero: "otherHero",
      x: 0,
      y: 0,
    };

    const result = adventureScreenReducer(state, closeHeroTradingWindow());

    const expected: AdventureScreenState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });
});
