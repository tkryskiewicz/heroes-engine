import { mount } from "enzyme";
import React from "react";

import { createPoint } from "heroes-core";
import { byTestId } from "heroes-test-helpers";

import { AdventureMapWindow, AdventureMapWindowProps } from "./AdventureMapWindow";

describe("AdventureMapWindow", () => {
  it("should render size", () => {
    const props: AdventureMapWindowProps = {
      cellSize: 12,
      height: 10,
      width: 10,
    };

    const wrapper = mount(<AdventureMapWindow {...props} />);

    expect(wrapper.childAt(0).props().style.width).toBe(120);
    expect(wrapper.childAt(0).props().style.height).toBe(120);
  });

  it("should render cell", () => {
    const props: AdventureMapWindowProps = {
      cellSize: 1,
      height: 1,
      renderCell: jest.fn(),
      width: 1,
    };

    mount(<AdventureMapWindow {...props} />);

    expect(props.renderCell).toBeCalledWith(0, createPoint(0, 0));
  });

  it("should render cells", () => {
    const props: AdventureMapWindowProps = {
      cellSize: 6,
      height: 12,
      renderCell: (i) => `cell ${i}`,
      width: 10,
    };

    const wrapper = mount(<AdventureMapWindow {...props} />);

    expect(wrapper.childAt(0).children().length).toBe(120);

    const cell = wrapper.find(byTestId("cell-0")).find(HTMLDivElement);

    expect(cell.props().style.width).toBe(6);
    expect(cell.props().style.height).toBe(6);
    expect(cell.text()).toBe("cell 0");
  });
});
