import { mount } from "enzyme";
import React from "react";

import { TerrainTransition } from "heroes-homm1";

import { MapCell, MapCellProps } from "./MapCell";

describe("MapCell", () => {
  const defaultProps: MapCellProps = {
    index: 0,
    size: "large",
    terrainTransition: TerrainTransition.None,
    terrainType: "",
    terrainVariant: 0,
  };

  it("should handle mouse enter", () => {
    const props: MapCellProps = {
      ...defaultProps,
      index: 1,
      onMouseEnter: jest.fn(),
    };

    const wrapper = mount(<MapCell {...props} />);

    wrapper.simulate("mouseenter");

    expect(props.onMouseEnter).toHaveBeenCalledWith(1);
  });

  it("should handle mouse leave", () => {
    const props: MapCellProps = {
      ...defaultProps,
      index: 1,
      onMouseLeave: jest.fn(),

    };

    const wrapper = mount(<MapCell {...props} />);

    wrapper.simulate("mouseleave");

    expect(props.onMouseLeave).toHaveBeenCalledWith(1);
  });

  it("should handle click", () => {
    const props: MapCellProps = {
      ...defaultProps,
      index: 1,
      onClick: jest.fn(),
    };

    const wrapper = mount(<MapCell {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalledWith(1);
  });
});
