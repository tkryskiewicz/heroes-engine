import { GameType } from "heroes-homm1";

import {
  changeGameType,
  ChangeGameTypeAction,
  closeCredits,
  CloseCreditsAction,
  closeHighScores,
  CloseHighScoresAction,
  MainWindowActionType,
  openCredits,
  OpenCreditsAction,
  openHighScores,
  OpenHighScoresAction,
} from "./actions";

describe("mainWindowActions", () => {
  it("should create an action to change game type", () => {
    const result = changeGameType(GameType.Standard);

    const expected: ChangeGameTypeAction = {
      type: MainWindowActionType.ChangeGameType,
      value: GameType.Standard,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open high scores", () => {
    const result = openHighScores();

    const expected: OpenHighScoresAction = {
      type: MainWindowActionType.OpenHighScores,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close high scores", () => {
    const result = closeHighScores();

    const expected: CloseHighScoresAction = {
      type: MainWindowActionType.CloseHighScores,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open credits", () => {
    const result = openCredits();

    const expected: OpenCreditsAction = {
      type: MainWindowActionType.OpenCredits,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close credits", () => {
    const result = closeCredits();

    const expected: CloseCreditsAction = {
      type: MainWindowActionType.CloseCredits,
    };

    expect(result).toEqual(expected);
  });
});
