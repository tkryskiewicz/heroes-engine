import { shallow } from "enzyme";
import React from "react";
import { byTestId } from "test-helpers";

import { ImageButton } from "../../base";
import { PlayersMenu, PlayersMenuProps } from "./PlayersMenu";

describe("PlayersMenu", () => {
  it("should handle 2 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const twoPlayersButton = wrapper.find(byTestId("two-players")).find(ImageButton);

    twoPlayersButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(2);
  });

  it("should handle 3 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const threePlayersButton = wrapper.find(byTestId("three-players")).find(ImageButton);

    threePlayersButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(3);
  });

  it("should handle 4 players click", () => {
    const props: PlayersMenuProps = {
      onOptionClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const fourPlayersButton = wrapper.find(byTestId("four-players")).find(ImageButton);

    fourPlayersButton.props().onClick();

    expect(props.onOptionClick).toHaveBeenCalledWith(4);
  });

  it("should handle cancel click", () => {
    const props: PlayersMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const cancelButton = wrapper.find(byTestId("cancel")).find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
