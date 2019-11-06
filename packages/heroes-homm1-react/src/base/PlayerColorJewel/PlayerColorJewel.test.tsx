import { mount } from "enzyme";
import React from "react";

import { PlayerColorJewel, PlayerColorJewelProps } from "./PlayerColorJewel";

describe("PlayerColorJewel", () => {
  it("should handle click", () => {
    const props: PlayerColorJewelProps = {
      onClick: jest.fn(),
      value: "color",
    };

    const wrapper = mount(<PlayerColorJewel {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalledWith("color");
  });
});
