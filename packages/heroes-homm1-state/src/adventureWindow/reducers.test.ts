import {
  changeEndTurnPromptVisible,
  closeHeroTradingWindow,
  closeMapObjectDetails,
  openHeroTradingWindow,
  openMapObjectDetails,
} from "./actions";
import { adventureWindowReducer } from "./reducers";
import { AdventureWindowState } from "./state";

describe("adventureWindowReducer", () => {
  it("should return initial state", () => {
    const result = adventureWindowReducer(undefined, {} as any);

    const expected: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening map object details", () => {
    const state: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureWindowReducer(state, openMapObjectDetails("id"));

    const expected: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      visibleMapObjectDetails: "id",
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing map object details", () => {
    const state: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      visibleMapObjectDetails: "id",
      x: 0,
      y: 0,
    };

    const result = adventureWindowReducer(state, closeMapObjectDetails());

    const expected: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing end turn prompt visibility", () => {
    const state: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureWindowReducer(state, changeEndTurnPromptVisible(true));

    const expected: AdventureWindowState = {
      endTurnPromptVisible: true,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening hero trading window", () => {
    const state: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    const result = adventureWindowReducer(state, openHeroTradingWindow("hero", "otherHero"));

    const expected: AdventureWindowState = {
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
    const state: AdventureWindowState = {
      endTurnPromptVisible: false,
      hero: "hero",
      heroTradingWindowVisible: true,
      otherHero: "otherHero",
      x: 0,
      y: 0,
    };

    const result = adventureWindowReducer(state, closeHeroTradingWindow());

    const expected: AdventureWindowState = {
      endTurnPromptVisible: false,
      heroTradingWindowVisible: false,
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });
});
