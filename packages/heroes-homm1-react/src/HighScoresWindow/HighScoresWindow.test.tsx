import React from "react";
import { byTestId, mountWithIntl } from "test-helpers";

import { CampaignId, GameType } from "heroes-homm1";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { HighScoresWindow, HighScoresWindowProps } from "./HighScoresWindow";

describe("HighScoresWindow", () => {
  const defaultProps: HighScoresWindowProps = {
    gameType: GameType.Standard,
    scores: {
      campaign: [],
      standard: [],
    },
  };

  describe("standard game", () => {
    it("should render scores", () => {
      const props: HighScoresWindowProps = {
        gameType: GameType.Standard,
        scores: {
          campaign: [],
          standard: [
            {
              playerName: "player",
              scenario: "scenario",
              score: 1,
            },
          ],
        },
      };

      const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

      const score = wrapper.find(byTestId("entry"));

      expect(score.length).toBe(1);
      expect(score.find(byTestId("player-name")).text()).toBe("player");
      expect(score.find(byTestId("scenario")).text()).toBe("scenario");
      expect(score.find(byTestId("score")).text()).toBe("1");
    });

    it("should render button", () => {
      const props: HighScoresWindowProps = {
        ...defaultProps,
        gameType: GameType.Standard,
      };

      const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

      const control = wrapper.find(byTestId("game-type")).find(ImageButton);

      expect(control.props().images).toBe(buttonImages.standard);
    });
  });

  describe("campaign game", () => {
    it("should render scores", () => {
      const props: HighScoresWindowProps = {
        gameType: GameType.Campaign,
        scores: {
          campaign: [
            {
              campaign: CampaignId.QueenLamanda,
              daysCount: 1,
              playerName: "player",
            },
          ],
          standard: [],
        },
      };

      const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

      const score = wrapper.find(byTestId("entry"));

      expect(score.length).toBe(1);
      expect(score.find(byTestId("player-name")).text()).toBe("player");
      expect(score.find(byTestId("days")).text()).toBe("1");
      expect(score.find(byTestId("campaign")).text()).toBe("Queen Lamanda");
    });

    it("should render button", () => {
      const props: HighScoresWindowProps = {
        ...defaultProps,
        gameType: GameType.Campaign,
      };

      const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

      const control = wrapper.find(byTestId("game-type")).find(ImageButton);

      expect(control.props().images).toBe(buttonImages.campaign);
    });
  });

  it("should handle game type click", () => {
    const props: HighScoresWindowProps = {
      ...defaultProps,
      onGameTypeClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

    const control = wrapper.find(byTestId("game-type")).find(ImageButton);

    control.props().onClick();

    expect(props.onGameTypeClick).toHaveBeenCalled();
  });

  it("should handle exit click", () => {
    const props: HighScoresWindowProps = {
      ...defaultProps,
      onExitClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<HighScoresWindow {...props} />);

    const control = wrapper.find(byTestId("exit")).find(ImageButton);

    control.props().onClick();

    expect(props.onExitClick).toHaveBeenCalled();
  });
});
