import { shallow } from "enzyme";
import React from "react";

import { ImageButton } from "../../base";
import { MainMenu, MainMenuProps } from "./MainMenu";

describe("MainMenu", () => {
  it("should handle new game click", () => {
    const props: MainMenuProps = {
      onNewGameClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const newGameButton = wrapper.find(".new-game").find(ImageButton);

    newGameButton.props().onClick();

    expect(props.onNewGameClick).toHaveBeenCalled();
  });

  it("should handle load game click", () => {
    const props: MainMenuProps = {
      onLoadGameClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const loadGameButton = wrapper.find(".load-game").find(ImageButton);

    loadGameButton.props().onClick();

    expect(props.onLoadGameClick).toHaveBeenCalled();
  });

  it("should handle view high scores click", () => {
    const props: MainMenuProps = {
      onViewHighScoresClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const viewHighScoresButton = wrapper.find(".view-high-scores").find(ImageButton);

    viewHighScoresButton.props().onClick();

    expect(props.onViewHighScoresClick).toHaveBeenCalled();
  });

  it("should handle view credits click", () => {
    const props: MainMenuProps = {
      onViewCreditsClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const viewCreditsButton = wrapper.find(".view-credits").find(ImageButton);

    viewCreditsButton.props().onClick();

    expect(props.onViewCreditsClick).toHaveBeenCalled();
  });

  it("should handle quit click", () => {
    const props: MainMenuProps = {
      onQuitClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const quitButton = wrapper.find(".quit").find(ImageButton);

    quitButton.props().onClick();

    expect(props.onQuitClick).toHaveBeenCalled();
  });
});
