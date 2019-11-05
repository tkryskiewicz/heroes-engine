import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { PlayersMenu, PlayersMenuProps } from "./PlayersMenu";

describe("PlayersMenu", () => {
  it("should handle 2 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const control = wrapper.find(byTestId("two-players"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(2);
  });

  it("should handle 3 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const control = wrapper.find(byTestId("three-players"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(3);
  });

  it("should handle 4 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const control = wrapper.find(byTestId("four-players"));

    control.simulate("click");

    expect(props.onOptionClick).toHaveBeenCalledWith(4);
  });

  it("should handle cancel click", () => {
    const props: PlayersMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
