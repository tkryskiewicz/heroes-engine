import { mount } from "enzyme";
import React from "react";

import { GameType } from "heroes-homm1";
import { byTestId } from "heroes-test-helpers";

import { HighScoresWindowContainer, HighScoresWindowContainerProps } from "./HighScoresWindowContainer";

describe("HighScoresWindowContainer", () => {
  const defaultProps: HighScoresWindowContainerProps = {
    gameType: GameType.Standard,
    scores: {
      campaign: [],
      standard: [],
    },
    visible: true,
  };

  it("should render standard game scores by default", () => {
    const props: HighScoresWindowContainerProps = {
      ...defaultProps,
      gameType: GameType.Standard,
      onGameTypeChange: jest.fn(),
    };

    mount(<HighScoresWindowContainer {...props} />);

    expect(props.onGameTypeChange).toHaveBeenCalledWith(GameType.Standard);
  });

  it("should handle game type change", () => {
    const props: HighScoresWindowContainerProps = {
      ...defaultProps,
      onGameTypeChange: jest.fn(),
    };

    const wrapper = mount(<HighScoresWindowContainer {...props} />);

    const control = wrapper.find(byTestId("game-type"));

    control.simulate("click");

    expect(props.onGameTypeChange).toHaveBeenCalledWith(GameType.Campaign);
  });

  it("should handle exit click", () => {
    const props: HighScoresWindowContainerProps = {
      ...defaultProps,
      onExitClick: jest.fn(),
    };

    const wrapper = mount(<HighScoresWindowContainer {...props} />);

    const control = wrapper.find(byTestId("exit"));

    control.simulate("click");

    expect(props.onExitClick).toHaveBeenCalled();
  });
});
