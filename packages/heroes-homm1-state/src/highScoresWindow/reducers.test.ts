import { GameType, initialHighScores } from "heroes-homm1";

import { changeGameType } from "./actions";
import { highScoresWindowReducer } from "./reducers";
import { HighScoresWindowState } from "./state";

describe("highScoresWindowReducer", () => {
  const defaultState: HighScoresWindowState = {
    gameType: GameType.Standard,
    scores: {
        [GameType.Standard]: [],
        [GameType.Campaign]: [],
    },
  };

  it("should return initial state", () => {
    const result = highScoresWindowReducer(undefined, {} as any);

    const expected: HighScoresWindowState = {
      gameType: GameType.Standard,
      scores: initialHighScores,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing game type", () => {
    const state: HighScoresWindowState = {
      ...defaultState,
      gameType: GameType.Standard,
    };

    const result = highScoresWindowReducer(state, changeGameType(GameType.Campaign));

    const expected: HighScoresWindowState = {
      ...state,
      gameType: GameType.Campaign,
    };

    expect(result).toEqual(expected);
  });
});
