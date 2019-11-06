import React from "react";

import { GameDifficulty, OpponentSetting, ScenarioDifficulty, ScenarioSize } from "heroes-homm1";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { PlayerColorJewel } from "../base";
import { StandardScenarioInfoWindow, StandardScenarioInfoWindowProps } from "./StandardScenarioInfoWindow";

describe("StandardScenarioInfoWindow", () => {
  const defaultProps: StandardScenarioInfoWindowProps = {
    visible: true,
  };

  it("should render scenario name", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioName: "scenario",
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-name")).text()).toBe("scenario");
  });

  it("should render game difficulty", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      gameDifficulty: GameDifficulty.Expert,
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("game-difficulty")).text()).toBe("Expert");
  });

  it("should render opponent settings", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      opponentSettings: [
        OpponentSetting.None,
        OpponentSetting.Average,
        OpponentSetting.Genius,
      ],
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    const opponentSettings = wrapper.find(byTestId("opponent-settings"));

    expect(opponentSettings.find(byTestId("opponent-0")).text()).toBe("None");
    expect(opponentSettings.find(byTestId("opponent-1")).text()).toBe("Average");
    expect(opponentSettings.find(byTestId("opponent-2")).text()).toBe("Genius");
  });

  it("should render player color", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      playerColor: "blue",
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    const playerColor = wrapper.find(byTestId("player-color")).find(PlayerColorJewel);

    expect(playerColor.props().value).toBe("blue");
  });

  it("should render king of the hill", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      kingOfTheHill: true,
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("king-of-the-hill")).text()).toBe("Yes");
  });

  it("should render difficulty rating", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      difficultyRating: 75,
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("difficulty-rating")).text()).toBe("75%");
  });

  it("should render scenario size", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioSize: ScenarioSize.Large,
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-size")).text()).toBe("Large");
  });

  it("should render scenario description", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioDescription: "description",
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-description")).text()).toBe("description");
  });

  it("should render scenario difficulty", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      scenarioDifficulty: ScenarioDifficulty.Tough,
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    expect(wrapper.find(byTestId("scenario-difficulty")).text()).toBe("Tough");
  });

  it("should handle okay click", () => {
    const props: StandardScenarioInfoWindowProps = {
      ...defaultProps,
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<StandardScenarioInfoWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });
});
