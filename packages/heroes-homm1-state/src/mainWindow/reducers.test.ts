import { GameType, initialHighScores } from "heroes-homm1";

import { changeGameType, closeCredits, closeHighScores, openCredits, openHighScores } from "./actions";
import { mainWindowReducer } from "./reducers";
import { MainWindowState } from "./state";

describe("mainWindowReducer", () => {
  const defaultState: MainWindowState = {
    creditsVisible: false,
    gameType: GameType.Standard,
    highScores: {
        [GameType.Standard]: [],
        [GameType.Campaign]: [],
    },
    highScoresVisible: false,
  };

  it("should return initial state", () => {
    const result = mainWindowReducer(undefined, {} as any);

    const expected: MainWindowState = {
      creditsVisible: false,
      gameType: GameType.Standard,
      highScores: initialHighScores,
      highScoresVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing game type", () => {
    const state: MainWindowState = {
      ...defaultState,
      gameType: GameType.Standard,
    };

    const result = mainWindowReducer(state, changeGameType(GameType.Campaign));

    const expected: MainWindowState = {
      ...state,
      gameType: GameType.Campaign,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening high scores", () => {
    const state: MainWindowState = {
      ...defaultState,
      highScoresVisible: false,
    };

    const result = mainWindowReducer(state, openHighScores());

    const expected: MainWindowState = {
      ...state,
      highScoresVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing high scores", () => {
    const state: MainWindowState = {
      ...defaultState,
      highScoresVisible: true,
    };

    const result = mainWindowReducer(state, closeHighScores());

    const expected: MainWindowState = {
      ...state,
      highScoresVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should set game type to standard when closing high scores", () => {
    const state: MainWindowState = {
      ...defaultState,
      gameType: GameType.Campaign,
      highScoresVisible: true,
    };

    const result = mainWindowReducer(state, closeHighScores());

    const expected: MainWindowState = {
      ...state,
      gameType: GameType.Standard,
      highScoresVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening credits", () => {
    const state: MainWindowState = {
      ...defaultState,
      creditsVisible: false,
    };

    const result = mainWindowReducer(state, openCredits());

    const expected: MainWindowState = {
      ...state,
      creditsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing credits", () => {
    const state: MainWindowState = {
      ...defaultState,
      creditsVisible: true,
    };

    const result = mainWindowReducer(state, closeCredits());

    const expected: MainWindowState = {
      ...state,
      creditsVisible: false,
    };

    expect(result).toEqual(expected);
  });
});
