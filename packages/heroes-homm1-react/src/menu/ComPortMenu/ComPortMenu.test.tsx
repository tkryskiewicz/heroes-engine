import { shallow } from "enzyme";
import React from "react";
import { byTestId } from "test-helpers";

import { ComPort } from "heroes-homm1";

import { ImageButton } from "../../base";
import { ComPortMenu, ComPortMenuProps } from "./ComPortMenu";

describe("ComPortMenu", () => {
  it("should handle COM-1 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const com1Button = wrapper.find(byTestId("com-1")).find(ImageButton);

    com1Button.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com1);
  });

  it("should handle COM-2 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const com2Button = wrapper.find(byTestId("com-2")).find(ImageButton);

    com2Button.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com2);
  });

  it("should handle COM-3 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const com3Button = wrapper.find(byTestId("com-3")).find(ImageButton);

    com3Button.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com3);
  });

  it("should handle COM-4 click", () => {
    const props: ComPortMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const com4Button = wrapper.find(byTestId("com-4")).find(ImageButton);

    com4Button.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(ComPort.Com4);
  });

  it("should handle cancel click", () => {
    const props: ComPortMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<ComPortMenu {...props} />);

    const cancelButton = wrapper.find(byTestId("cancel")).find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
