import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { AdventureOptionsWindow, AdventureOptionsWindowProps } from "./AdventureOptionsWindow";

describe("AdventureOptionsWindow", () => {
  it("should handle view world click", () => {
    const props: AdventureOptionsWindowProps = {
      onViewWorldClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("view-world"));

    control.simulate("click");

    expect(props.onViewWorldClick).toHaveBeenCalled();
  });

  it("should handle view puzzle click", () => {
    const props: AdventureOptionsWindowProps = {
      onViewPuzzleClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("view-puzzle"));

    control.simulate("click");

    expect(props.onViewPuzzleClick).toHaveBeenCalled();
  });

  it("should handle cast spell click", () => {
    const props: AdventureOptionsWindowProps = {
      onCastSpellClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("cast-spell"));

    control.simulate("click");

    expect(props.onCastSpellClick).toHaveBeenCalled();
  });

  it("should handle dig click", () => {
    const props: AdventureOptionsWindowProps = {
      onDigClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("dig"));

    control.simulate("click");

    expect(props.onDigClick).toHaveBeenCalled();

  });

  it("should handle okay click", () => {
    const props: AdventureOptionsWindowProps = {
      onOkayClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const control = wrapper.find(byTestId("okay"));

    control.simulate("click");

    expect(props.onOkayClick).toHaveBeenCalled();
  });
});
