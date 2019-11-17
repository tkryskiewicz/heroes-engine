import { mount } from "enzyme";
import React from "react";

import { MageGuildView, MageGuildViewProps } from "./MageGuildView";

describe("MageGuildView", () => {
  const defaultProps: MageGuildViewProps = {
    level: 0,
    structure: "",
  };

  it("should handle mouse enter", () => {
    const props: MageGuildViewProps = {
      ...defaultProps,
      onMouseEnter: jest.fn(),
      structure: "structure",
    };

    const wrapper = mount(<MageGuildView {...props} />);

    wrapper.simulate("mouseenter");

    expect(props.onMouseEnter).toHaveBeenCalledWith("structure");
  });

  it("should handle mouse leave", () => {
    const props: MageGuildViewProps = {
      ...defaultProps,
      onMouseLeave: jest.fn(),
      structure: "structure",
    };

    const wrapper = mount(<MageGuildView {...props} />);

    wrapper.simulate("mouseleave");

    expect(props.onMouseLeave).toHaveBeenCalledWith("structure");
  });

  it("should handle click", () => {
    const props: MageGuildViewProps = {
      ...defaultProps,
      onClick: jest.fn(),
      structure: "structure",
    };

    const wrapper = mount(<MageGuildView {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalledWith("structure");
  });
});
