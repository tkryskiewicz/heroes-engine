import { mount } from "enzyme";
import React from "react";

import { Direction } from "heroes-core";
import { byTestId } from "heroes-test-helpers";

import { HeroMapObject, HeroMapObjectProps } from "./HeroMapObject";

describe("HeroMapObject", () => {
  const defaultProps: HeroMapObjectProps = {
    heroClass: "",
    orientation: Direction.North,
  };

  it("should handle click", () => {
    const props: HeroMapObjectProps = {
      ...defaultProps,
      onClick: jest.fn(),
    };

    const wrapper = mount(<HeroMapObject {...props} />).find(byTestId("root"));

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });
});
