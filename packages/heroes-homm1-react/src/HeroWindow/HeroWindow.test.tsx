import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { ImageButton } from "../base";
import { HeroWindow, HeroWindowProps } from "./HeroWindow";

describe("HeroWindow", () => {
  const defaultProps: HeroWindowProps = {
    visible: true,
  };

  it("should render title", () => {
    const props: HeroWindowProps = {
      ...defaultProps,
      title: "title",
    };

    const wrapper = mount(<HeroWindow {...props} />);

    expect(wrapper.find(byTestId("title")).text()).toBe("title");
  });

  it("should not show dismiss by default", () => {
    const wrapper = mount(<HeroWindow {...defaultProps} />);

    expect(wrapper.find(byTestId("dismiss")).find(ImageButton).exists()).toBe(false);
  });

  it("should show dismiss when set", () => {
    const props: HeroWindowProps = {
      ...defaultProps,
      dismissVisible: true,
    };

    const wrapper = mount(<HeroWindow {...props} />);

    expect(wrapper.find(byTestId("dismiss")).find(ImageButton).exists()).toBe(true);
  });

  it("should handle dismiss click", () => {
    const props: HeroWindowProps = {
      ...defaultProps,
      dismissVisible: true,
      onDismissClick: jest.fn(),
    };

    const wrapper = mount(<HeroWindow {...props} />);

    const control = wrapper.find(byTestId("dismiss")).find(ImageButton);

    control.props().onClick();

    expect(props.onDismissClick).toHaveBeenCalled();
  });

  it("should handle exit click", () => {
    const props: HeroWindowProps = {
      ...defaultProps,
      onExitClick: jest.fn(),
    };

    const wrapper = mount(<HeroWindow {...props} />);

    const control = wrapper.find(byTestId("exit")).find(ImageButton);

    control.props().onClick();

    expect(props.onExitClick).toHaveBeenCalled();
  });

  it("should render status text", () => {
    const props: HeroWindowProps = {
      ...defaultProps,
      statusText: "status text",
    };

    const wrapper = mount(<HeroWindow {...props} />);

    expect(wrapper.find(byTestId("status-text")).text()).toBe("status text");
  });
});
