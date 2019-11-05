import { shallow } from "enzyme";
import React from "react";

import { ComPort } from "heroes-homm1";
import { byTestId } from "heroes-test-helpers";

import { ComPortMenu, ComPortMenuProps } from "./ComPortMenu";

describe("ComPortMenu", () => {
  it("should handle COM-1 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const control = wrapper.find(byTestId("com-1"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com1);
  });

  it("should handle COM-2 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const control = wrapper.find(byTestId("com-2"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com2);
  });

  it("should handle COM-3 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const control = wrapper.find(byTestId("com-3"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com3);
  });

  it("should handle COM-4 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const control = wrapper.find(byTestId("com-4"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com4);
  });

  it("should handle cancel click", () => {
    const props: ComPortMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
