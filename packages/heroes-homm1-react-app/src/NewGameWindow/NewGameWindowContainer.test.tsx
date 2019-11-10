import React from "react";

import { GameDifficulty, OpponentSetting } from "heroes-homm1";
import { GameDifficultyBox, NewGameWindow, OpponentSettingBox } from "heroes-homm1-react";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { NewGameWindowContainer, NewGameWindowContainerProps } from "./NewGameWindowContainer";

describe("NewGameWindowContainer", () => {
  const defaultProps: NewGameWindowContainerProps = {
    data: {
      alignments: [],
    },
    gameDifficulty: GameDifficulty.Easy,
    kingOfTheHill: false,
    opponentSettings: [],
    playerColor: "color",
    scenarioName: "",
  };

  it("should render game difficulty", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      gameDifficulty: GameDifficulty.Expert,
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    const control = wrapper.find(GameDifficultyBox).find({ value: GameDifficulty.Expert });

    expect(control.props().selected).toBe(true);
  });

  it("should handle game difficulty change", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      gameDifficulty: GameDifficulty.Easy,
      onGameDifficultyChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    const control = wrapper.find(GameDifficultyBox).find({ value: GameDifficulty.Hard });

    control.simulate("click");

    expect(props.onGameDifficultyChange).toHaveBeenCalledWith(GameDifficulty.Hard);
  });

  it("should render opponent settings", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      opponentSettings: [
        OpponentSetting.None,
        OpponentSetting.Average,
        OpponentSetting.Genius,
      ],
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    expect(wrapper.find(OpponentSettingBox).find({ index: 0 }).props().value).toBe(OpponentSetting.None);
    expect(wrapper.find(OpponentSettingBox).find({ index: 1 }).props().value).toBe(OpponentSetting.Average);
    expect(wrapper.find(OpponentSettingBox).find({ index: 2 }).props().value).toBe(OpponentSetting.Genius);
  });

  it("should handle opponent setting change", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      onOpponentSettingsChange: jest.fn(),
      opponentSettings: [
        OpponentSetting.None,
        OpponentSetting.Average,
        OpponentSetting.Genius,
      ],
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    const control = wrapper.find(OpponentSettingBox).find({ index: 1 });

    control.simulate("click");

    expect(props.onOpponentSettingsChange).toHaveBeenCalledWith([
      OpponentSetting.None,
      OpponentSetting.Smart,
      OpponentSetting.Genius,
    ]);
  });

  it("should render player color", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      data: {
        alignments: [],
      },
      playerColor: "color",
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    expect(wrapper.find(NewGameWindow).props().playerColor).toBe("color");
  });

  it("should handle player color change", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      data: {
        alignments: [
          "colorA",
          "colorB",
        ],
      },
      onPlayerColorChange: jest.fn(),
      playerColor: "colorA",
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    wrapper.find(NewGameWindow).props().onPlayerColorClick();

    expect(props.onPlayerColorChange).toHaveBeenCalledWith("colorB");
  });

  it("should render king of the hill", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      kingOfTheHill: true,
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    expect(wrapper.find(NewGameWindow).props().kingOfTheHill).toBe(true);
  });

  it("should handle king of the hill click", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      kingOfTheHill: false,
      onKingOfTheHillChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    const control = wrapper.find(byTestId("king-of-the-hill"));

    control.simulate("click");

    expect(props.onKingOfTheHillChange).toHaveBeenCalledWith(true);
  });

  it("should render scenario name", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      scenarioName: "scenario",
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    expect(wrapper.find(NewGameWindow).props().scenarioName).toBe("scenario");
  });

  it("should handle select scenario click", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      onSelectScenarioClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    wrapper.find(NewGameWindow).props().onSelectScenarioClick();

    expect(props.onSelectScenarioClick).toHaveBeenCalled();
  });

  it("should handle okay click", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    wrapper.find(NewGameWindow).props().onOkayClick();

    expect(props.onOkayClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: NewGameWindowContainerProps = {
      ...defaultProps,
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<NewGameWindowContainer {...props} />);

    wrapper.find(NewGameWindow).props().onCancelClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
