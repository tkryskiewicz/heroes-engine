import { shallow } from "enzyme";
import React from "react";

import { ImageButton } from "../../base/ImageButton";
import { PlayersMenu, PlayersMenuProps } from "./PlayersMenu";

describe("PlayersMenu", () => {
  it("should handle 2 players click", () => {
    const props: PlayersMenuProps = {
      onPlayersClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const twoPlayersButton = wrapper.find(".two-players").find(ImageButton);

    twoPlayersButton.props().onClick();

    expect(props.onPlayersClick).toHaveBeenCalledWith(2);
  });

  it("should handle 3 players click", () => {
    const props: PlayersMenuProps = {
      onPlayersClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const threePlayersButton = wrapper.find(".three-players").find(ImageButton);

    threePlayersButton.props().onClick();

    expect(props.onPlayersClick).toHaveBeenCalledWith(3);
  });

  it("should handle 4 players click", () => {
    const props: PlayersMenuProps = {
      onPlayersClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const fourPlayersButton = wrapper.find(".four-players").find(ImageButton);

    fourPlayersButton.props().onClick();

    expect(props.onPlayersClick).toHaveBeenCalledWith(4);
  });

  it("should handle cancel click", () => {
    const props: PlayersMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<PlayersMenu {...props} />);

    const cancelButton = wrapper.find(".cancel").find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
