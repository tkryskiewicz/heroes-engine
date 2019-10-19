import { shallow } from "enzyme";
import React from "react";

import { ImageButton } from "../../base";
import { GameTypeMenu, GameTypeMenuProps } from "./GameTypeMenu";

describe("GameTypeMenu", () => {
  it("should handle standard game click", () => {
    const props: GameTypeMenuProps = {
      onStandardGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const standardGameButton = wrapper.find(".standard-game").find(ImageButton);

    standardGameButton.props().onClick();

    expect(props.onStandardGameClick).toHaveBeenCalled();
  });

  it("should handle campaign game click", () => {
    const props: GameTypeMenuProps = {
      onCampaignGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const campaignGameButton = wrapper.find(".campaign-game").find(ImageButton);

    campaignGameButton.props().onClick();

    expect(props.onCampaignGameClick).toHaveBeenCalled();
  });

  it("should handle multi-player game click", () => {
    const props: GameTypeMenuProps = {
      onMultiPlayerGameClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const multiPlayerGameButton = wrapper.find(".multi-player-game").find(ImageButton);

    multiPlayerGameButton.props().onClick();

    expect(props.onMultiPlayerGameClick).toHaveBeenCalled();
  });

  it("should handle cancel click", () => {
    const props: GameTypeMenuProps = {
      onCancelClick: jest.fn(),
    };

    const wrapper = shallow(<GameTypeMenu {...props} />);

    const cancelButton = wrapper.find(".cancel").find(ImageButton);

    cancelButton.props().onClick();

    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
