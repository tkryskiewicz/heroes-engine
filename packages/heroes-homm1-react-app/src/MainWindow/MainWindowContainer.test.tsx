import { mount } from "enzyme";
import React from "react";

import { CreditsWindow, MainMenu } from "heroes-homm1-react";

import { MainWindowContainer, MainWindowContainerProps } from "./MainWindowContainer";

describe("MainWindowContainer", () => {
  it("should not show credits when set", () => {
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

    mainMenu.props().onViewCreditsClick!();

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
