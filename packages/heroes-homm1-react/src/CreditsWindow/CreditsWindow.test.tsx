import { shallow } from "enzyme";
import React from "react";

import { CreditsWindow, CreditsWindowProps } from "./CreditsWindow";

describe("CreditsWindow", () => {
  it("should handle click", () => {
    const props: CreditsWindowProps = {
      onClick: jest.fn(),
    };

    const wrapper = shallow(<CreditsWindow {...props} />).find("CreditsWindow");

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
