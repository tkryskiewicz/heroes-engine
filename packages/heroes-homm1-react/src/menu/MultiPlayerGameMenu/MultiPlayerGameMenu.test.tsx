import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { MultiPlayerGameMenu, MultiPlayerGameMenuProps } from "./MultiPlayerGameMenu";

describe("MultiPlayerGameMenu", () => {
  it("should handle hot seat click", () => {
    const props: MultiPlayerGameMenuProps = {
      onHotSeatClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const control = wrapper.find(byTestId("hot-seat"));

    control.simulate("click");

    expect(props.onHotSeatClick).toHaveBeenCalled();
  });

  it("should handle direct connect click", () => {
    const props: MultiPlayerGameMenuProps = {
      onDirectConnectClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const control = wrapper.find(byTestId("direct-connect"));

    control.simulate("click");

    expect(props.onDirectConnectClick).toHaveBeenCalled();
  });

  it("should handle modem click", () => {
    const props: MultiPlayerGameMenuProps = {
      onModemClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const control = wrapper.find(byTestId("modem"));

    control.simulate("click");

    expect(props.onModemClick).toHaveBeenCalled();
  });

  it("should handle network click", () => {
    const props: MultiPlayerGameMenuProps = {
      onNetworkClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const control = wrapper.find(byTestId("network"));

    control.simulate("click");

    expect(props.onNetworkClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: MultiPlayerGameMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<MultiPlayerGameMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
