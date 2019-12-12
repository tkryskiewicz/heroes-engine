import { GameType } from "heroes-homm1";
import { AppState, highScoresWindowActions, rootReducer } from "heroes-homm1-state";

import { mapDispatchToProps, mapStateToProps } from "./HighScoresWindowContainer.connect";

describe("HighScoresWindowContainer", () => {
  describe("mapStateToProps", () => {
    it("should map state", () => {
      const state: AppState = {
        ...rootReducer(undefined, {} as any),
        highScoresWindow: {
          gameType: GameType.Campaign,
          scores: {
            [GameType.Standard]: [],
            [GameType.Campaign]: [],
          },
        },
      };

      const result = mapStateToProps(state);

      const expected: ReturnType<typeof mapStateToProps> = {
        gameType: GameType.Campaign,
        scores: {
          [GameType.Standard]: [],
          [GameType.Campaign]: [],
        },
      };

      expect(result).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should map changing game type", () => {
      const dispatch = jest.fn();

      const result = mapDispatchToProps(dispatch);

      result.onGameTypeChange(GameType.Standard);

      expect(dispatch).toHaveBeenCalledWith(highScoresWindowActions.changeGameType(GameType.Standard));
    });
  });
});
