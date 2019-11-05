import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { MainMenu, MainMenuProps } from "./MainMenu";

describe("MainMenu", () => {
  it("should handle new game click", () => {
    const props: MainMenuProps = {
      onNewGameClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const control = wrapper.find(byTestId("new-game"));

    control.simulate("click");

    expect(props.onNewGameClick).toHaveBeenCalled();
  });

  it("should handle load game click", () => {
    const props: MainMenuProps = {
      onLoadGameClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const control = wrapper.find(byTestId("load-game"));

    control.simulate("click");

    expect(props.onLoadGameClick).toHaveBeenCalled();
  });

  it("should handle view high scores click", () => {
    const props: MainMenuProps = {
      onViewHighScoresClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const control = wrapper.find(byTestId("view-high-scores"));

    control.simulate("click");

    expect(props.onViewHighScoresClick).toHaveBeenCalled();
  });

  it("should handle view credits click", () => {
    const props: MainMenuProps = {
      onViewCreditsClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const control = wrapper.find(byTestId("view-credits"));

    control.simulate("click");

    expect(props.onViewCreditsClick).toHaveBeenCalled();
  });

  it("should handle quit click", () => {
    const props: MainMenuProps = {
      onQuitClick: jest.fn(),
    };

    const wrapper = shallow(<MainMenu {...props} />);

    const control = wrapper.find(byTestId("quit"));

    control.simulate("click");

    expect(props.onQuitClick).toHaveBeenCalled();
  });
});
