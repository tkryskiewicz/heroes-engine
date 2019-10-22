import { mount } from "enzyme";
import React from "react";

import { GameType } from "heroes-homm1";
import { CreditsWindow, HighScoresWindow, MainMenu } from "heroes-homm1-react";

import { MainWindowContainer, MainWindowContainerProps } from "./MainWindowContainer";

describe("MainWindowContainer", () => {
  it("should not show high scores by default", () => {
    const wrapper = mount(<MainWindowContainer />);

    const highScores = wrapper.find(HighScoresWindow);

    expect(highScores.props().visible).toBe(false);
  });

  it("should show high scores when set", () => {
    const props: MainWindowContainerProps = {
      highScoresVisible: true,
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const highScores = wrapper.find(HighScoresWindow);

    expect(highScores.props().visible).toBe(true);
  });

  it("should handle game type click", () => {
    const props: MainWindowContainerProps = {
      onGameTypeChange: jest.fn(),
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const highScores = wrapper.find(HighScoresWindow);

    highScores.props().onGameTypeClick!();

    expect(props.onGameTypeChange).toHaveBeenCalledWith(GameType.Campaign);
  });

  it("should open high scores click", () => {
    const props: MainWindowContainerProps = {
      onOpenHighScoresClick: jest.fn(),
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const mainMenu = wrapper.find(MainMenu);

    mainMenu.props().onViewHighScoresClick();

    expect(props.onOpenHighScoresClick).toHaveBeenCalled();
  });

  it("should handle close high scores click", () => {
    const props: MainWindowContainerProps = {
      highScoresVisible: true,
      onCloseHighScoresClick: jest.fn(),
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const highScores = wrapper.find(HighScoresWindow);

    highScores.props().onExitClick!();

    expect(props.onCloseHighScoresClick).toHaveBeenCalled();
  });

  it("should not show credits by default", () => {
    const wrapper = mount(<MainWindowContainer />);

    const credits = wrapper.find(CreditsWindow);

    expect(credits.props().visible).toBe(false);
  });

  it("should show credits when set", () => {
    const props: MainWindowContainerProps = {
      creditsVisible: true,
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const credits = wrapper.find(CreditsWindow);

    expect(credits.props().visible).toBe(true);
  });

  it("should handle open credits click", () => {
    const props: MainWindowContainerProps = {
      onOpenCreditsClick: jest.fn(),
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const mainMenu = wrapper.find(MainMenu);

    mainMenu.props().onViewCreditsClick();

    expect(props.onOpenCreditsClick).toHaveBeenCalled();
  });

  it("should handle close credits click", () => {
    const props: MainWindowContainerProps = {
      creditsVisible: true,
      onCloseCreditsClick: jest.fn(),
    };

    const wrapper = mount(<MainWindowContainer {...props} />);

    const credits = wrapper.find(CreditsWindow);

    credits.props().onClick!();

    expect(props.onCloseCreditsClick).toHaveBeenCalled();
  });
});
