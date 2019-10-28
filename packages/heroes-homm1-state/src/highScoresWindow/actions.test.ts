import { GameType } from "heroes-homm1";

import {
  changeGameType,
  ChangeGameTypeAction,
  HighScoresWindowActionType,
} from "./actions";

describe("highScoresWindowActions", () => {
  it("should create an action to change game type", () => {
    const result = changeGameType(GameType.Standard);

    const expected: ChangeGameTypeAction = {
      type: HighScoresWindowActionType.ChangeGameType,
      value: GameType.Standard,
    };

    expect(result).toEqual(expected);
  });
});
