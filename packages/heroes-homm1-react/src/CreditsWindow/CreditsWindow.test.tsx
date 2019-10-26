import { mount } from "enzyme";
import React from "react";
import { byTestId } from "test-helpers";

import { CreditsWindow, CreditsWindowProps } from "./CreditsWindow";

describe("CreditsWindow", () => {
  it("should handle click", () => {
    const props: CreditsWindowProps = {
      onClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<CreditsWindow {...props} />).find(byTestId("root"));

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
