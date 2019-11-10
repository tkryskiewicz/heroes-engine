import { mount } from "enzyme";
import React from "react";

import { GameDifficulty } from "heroes-homm1";
import { byTestId } from "heroes-test-helpers";

import { difficultyImages } from "./assets";

import { GameDifficultyBox, GameDifficultyBoxProps } from "./GameDifficultyBox";

describe("GameDifficultyBox", () => {
  it("should render value", () => {
    const props: GameDifficultyBoxProps = {
      value: GameDifficulty.Expert,
    };

    const wrapper = mount(<GameDifficultyBox {...props} />);

    expect(wrapper.find(HTMLImageElement).props().src).toBe(difficultyImages.expert);
  });

  it("should not render selection by default", () => {
    const wrapper = mount(<GameDifficultyBox />);

    expect(wrapper.find(byTestId("selection")).exists()).toBe(false);
  });

  it("should render selection", () => {
    const props: GameDifficultyBoxProps = {
      selected: true,
    };

    const wrapper = mount(<GameDifficultyBox {...props} />);

    expect(wrapper.find(byTestId("selection")).exists()).toBe(true);
  });

  it("should handle click", () => {
    const props: GameDifficultyBoxProps = {
      onClick: jest.fn(),
      value: GameDifficulty.Expert,
    };

    const wrapper = mount(<GameDifficultyBox {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalledWith(GameDifficulty.Expert);
  });
});
