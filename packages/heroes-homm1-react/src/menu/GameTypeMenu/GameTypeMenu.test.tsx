import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { GameTypeMenu, GameTypeMenuProps } from "./GameTypeMenu";

describe("GameTypeMenu", () => {
  it("should handle standard game click", () => {
    const props: GameTypeMenuProps = {
      onStandardGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const control = wrapper.find(byTestId("standard-game"));

    control.simulate("click");

    expect(props.onStandardGameClick).toHaveBeenCalled();
  });

  it("should handle campaign game click", () => {
    const props: GameTypeMenuProps = {
      onCampaignGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const control = wrapper.find(byTestId("campaign-game"));

    control.simulate("click");

    expect(props.onCampaignGameClick).toHaveBeenCalled();
  });

  it("should handle multi-player game click", () => {
    const props: GameTypeMenuProps = {
      onMultiPlayerGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const control = wrapper.find(byTestId("multi-player-game"));

    control.simulate("click");

    expect(props.onMultiPlayerGameClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: GameTypeMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const control = wrapper.find(byTestId("cancel"));

    control.simulate("click");

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
