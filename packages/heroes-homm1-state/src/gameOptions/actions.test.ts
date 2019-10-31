import { GameOption } from "heroes-homm1";

import {
  closeEndGamePrompt,
  CloseEndGamePromptAction,
  GameOptionsActionType,
  openEndGamePrompt,
  OpenEndGamePromptAction,
} from "./actions";

describe("gameOptionsActions", () => {
  it("should create an action to open end game prompt", () => {
    const result = openEndGamePrompt(GameOption.NewGame);

    const expected: OpenEndGamePromptAction = {
      option: GameOption.NewGame,
      type: GameOptionsActionType.OpenEndGamePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close end game prompt", () => {
    const result = closeEndGamePrompt();

    const expected: CloseEndGamePromptAction = {
      type: GameOptionsActionType.CloseEndGamePrompt,
    };

    expect(result).toEqual(expected);
  });
});
