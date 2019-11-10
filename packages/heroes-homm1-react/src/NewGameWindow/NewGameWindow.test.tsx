import React from "react";

import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { ImageSwitch, PlayerColorJewel } from "../base";
import { NewGameWindow, NewGameWindowProps } from "./NewGameWindow";

describe("NewGameWindow", () => {
  it("should render game difficulties", () => {
    const props: NewGameWindowProps = {
      renderGameDifficulty: (i) => `difficulty-${i}`,
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    expect(wrapper.find(byTestId("game-difficulty-0")).text()).toBe("difficulty-0");
    expect(wrapper.find(byTestId("game-difficulty-1")).text()).toBe("difficulty-1");
    expect(wrapper.find(byTestId("game-difficulty-2")).text()).toBe("difficulty-2");
    expect(wrapper.find(byTestId("game-difficulty-3")).text()).toBe("difficulty-3");
  });

  it("should render opponent settings", () => {
    const props: NewGameWindowProps = {
      renderOpponentSetting: (i) => `opponent-${i}`,
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    expect(wrapper.find(byTestId("opponent-setting-0")).text()).toBe("opponent-0");
    expect(wrapper.find(byTestId("opponent-setting-1")).text()).toBe("opponent-1");
    expect(wrapper.find(byTestId("opponent-setting-2")).text()).toBe("opponent-2");
  });

  it("should render player color", () => {
    const props: NewGameWindowProps = {
      playerColor: "color",
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const playerColor = wrapper.find(byTestId("player-color")).find(PlayerColorJewel);

    expect(playerColor.props().value).toBe("color");
  });

  it("should handle player color click", () => {
    const props: NewGameWindowProps = {
      onPlayerColorClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("player-color"));

    control.simulate("click");

    expect(props.onPlayerColorClick).toHaveBeenCalled();
  });

  it("should not check king of the hill by default", () => {
    const wrapper = mountWithIntl(<NewGameWindow />);

    const control = wrapper.find(byTestId("king-of-the-hill")).find(ImageSwitch);

    expect(control.props().checked).toBe(false);
  });

  it("should check king of the hill", () => {
    const props: NewGameWindowProps = {
      kingOfTheHill: true,
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("king-of-the-hill")).find(ImageSwitch);

    expect(control.props().checked).toBe(true);
  });

  it("should handle king of the hill change", () => {
    const props: NewGameWindowProps = {
      kingOfTheHill: false,
      onKingOfTheHillChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("king-of-the-hill"));

    control.simulate("click");

    expect(props.onKingOfTheHillChange).toHaveBeenCalledWith(true);
  });

  it("should render scenario name", () => {
    const props: NewGameWindowProps = {
      scenarioName: "scenario",
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-name")).text()).toBe("scenario");
  });

  it("should handle select scenario click", () => {
    const props: NewGameWindowProps = {
      onSelectScenarioClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("select-scenario"));

    control.simulate("click");

    expect(props.onSelectScenarioClick).toHaveBeenCalled();
  });

  it("should render difficulty rating", () => {
    const props: NewGameWindowProps = {
      difficultyRating: 10,
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    expect(wrapper.find(byTestId("difficulty-rating")).text()).toBe("Difficulty Rating: 10%");
  });

  it("should handle okay click", () => {
    const props: NewGameWindowProps = {
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: NewGameWindowProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindow {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
