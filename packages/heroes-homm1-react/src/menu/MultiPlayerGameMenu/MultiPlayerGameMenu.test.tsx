import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { ImageButton } from "../../base";
import { MultiPlayerGameMenu, MultiPlayerGameMenuProps } from "./MultiPlayerGameMenu";

describe("MultiPlayerGameMenu", () => {
  it("should handle hot seat click", () => {
    const props: MultiPlayerGameMenuProps = {
      onHotSeatClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const hotSeatButton = wrapper.find(byTestId("hot-seat")).find(ImageButton);

    hotSeatButton.props().onClick();

    expect(props.onHotSeatClick).toHaveBeenCalled();
  });

  it("should handle direct connect click", () => {
    const props: MultiPlayerGameMenuProps = {
      onDirectConnectClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const directConnectButton = wrapper.find(byTestId("direct-connect")).find(ImageButton);

    directConnectButton.props().onClick();

    expect(props.onDirectConnectClick).toHaveBeenCalled();
  });

  it("should handle modem click", () => {
    const props: MultiPlayerGameMenuProps = {
      onModemClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const modemButton = wrapper.find(byTestId("modem")).find(ImageButton);

    modemButton.props().onClick();

    expect(props.onModemClick).toHaveBeenCalled();
  });

  it("should handle network click", () => {
    const props: MultiPlayerGameMenuProps = {
      onNetworkClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const networkButton = wrapper.find(byTestId("network")).find(ImageButton);

    networkButton.props().onClick();

    expect(props.onNetworkClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: MultiPlayerGameMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const cancelButton = wrapper.find(byTestId("cancel")).find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
