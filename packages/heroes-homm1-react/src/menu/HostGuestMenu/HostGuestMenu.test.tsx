import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { HostGuestMenu, HostGuestMenuProps } from "./HostGuestMenu";

describe("HostGuestMenu", () => {
  it("should render host", () => {
    const wrapper = mount(<HostGuestMenu />);

    const control = wrapper.find(byTestId("host")).find(ImageButton);

    expect(control.props().images).toBe(buttonImages.host);
  });

  it("should render guest by default", () => {
    const wrapper = mount(<HostGuestMenu />);

    const control = wrapper.find(byTestId("guest")).find(ImageButton);

    expect(control.props().images).toBe(buttonImages.guest);
  });

  it("should not render description by default", () => {
    const wrapper = mount(<HostGuestMenu />);

    expect(wrapper.props().descriptionVisible).toBe(false);
  });

  it("should render controls with description when set", () => {
    const props: HostGuestMenuProps = {
      descriptionVisible: true,
    };

    const wrapper = mount(<HostGuestMenu {...props} />);

    const hostControl = wrapper.find(byTestId("host")).find(ImageButton);
    const guestControl = wrapper.find(byTestId("guest")).find(ImageButton);

    expect(hostControl.props().images).toBe(buttonImages.hostDials);
    expect(guestControl.props().images).toBe(buttonImages.guestAnswers);
  });

  it("should handle host click", () => {
    const props: HostGuestMenuProps = {
      onHostClick: jest.fn(),
    };

    const wrapper = mount(<HostGuestMenu {...props} />);

    const control = wrapper.find(byTestId("host"));

    control.simulate("click");

    expect(props.onHostClick).toHaveBeenCalled();
  });

  it("should handle guest click", () => {
    const props: HostGuestMenuProps = {
      onGuestClick: jest.fn(),
    };

    const wrapper = mount(<HostGuestMenu {...props} />);

    const control = wrapper.find(byTestId("guest"));

    control.simulate("click");

    expect(props.onGuestClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: HostGuestMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = mount(<HostGuestMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
