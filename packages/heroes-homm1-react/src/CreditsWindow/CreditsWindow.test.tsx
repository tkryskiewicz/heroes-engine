import { mount } from "enzyme";
import React from "react";

import { CreditsWindow, CreditsWindowProps } from "./CreditsWindow";

describe("CreditsWindow", () => {
  it("should handle click", () => {
    const props: CreditsWindowProps = {
      onClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<CreditsWindow {...props} />).find(".root");

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
