import { mount } from "enzyme";
import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../ImageButton";
import { SystemButton, SystemButtonProps } from "./SystemButton";

describe("SystemButton", () => {
  it("should render yes button", () => {
    const props: SystemButtonProps = {
      type: "yes",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().images).toBe(buttonImages.yes);
  });

  it("should render no button", () => {
    const props: SystemButtonProps = {
      type: "no",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().images).toBe(buttonImages.no);
  });

  it("should render okay button", () => {
    const props: SystemButtonProps = {
      type: "okay",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().images).toBe(buttonImages.okay);
  });

  it("should render cancel button", () => {
    const props: SystemButtonProps = {
      type: "cancel",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().images).toBe(buttonImages.cancel);
  });

  it("should not be disabled by default", () => {
    const props: SystemButtonProps = {
      type: "yes",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().disabled).toBe(false);
  });

  it("should be disabled when set", () => {
    const props: SystemButtonProps = {
      disabled: true,
      type: "yes",
    };

    const wrapper = mount(<SystemButton {...props} />);

    const control = wrapper.find(ImageButton);

    expect(control.props().disabled).toBe(true);
  });

  it("should handle click", () => {
    const props: SystemButtonProps = {
      onClick: jest.fn(),
      type: "yes",
    };

    const wrapper = mount(<SystemButton {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
