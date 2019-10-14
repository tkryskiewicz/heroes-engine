import { shallow } from "enzyme";
import React from "react";

import { ImageButton } from "../base/ImageButton";
import { AdventureButtons, AdventureButtonsProps } from "./AdventureButtons";

describe("AdventureButtons", () => {
  it("should handle next hero click", () => {
    const props: AdventureButtonsProps = {
      onNextHeroClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const nextHeroButton = wrapper.find(".next-hero").find(ImageButton);

    nextHeroButton.props().onClick();

    expect(props.onNextHeroClick).toHaveBeenCalled();
  });

  it("should disable next hero", () => {
    const props: AdventureButtonsProps = {
      nextHeroDisabled: true,
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const nextHeroButton = wrapper.find(".next-hero").find(ImageButton);

    expect(nextHeroButton.props().disabled).toBe(true);
  });

  it("should handle move click", () => {
    const props: AdventureButtonsProps = {
      onMoveClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const moveButton = wrapper.find(".move").find(ImageButton);

    moveButton.props().onClick();

    expect(props.onMoveClick).toHaveBeenCalled();
  });

  it("should disable move", () => {
    const props: AdventureButtonsProps = {
      moveDisabled: true,
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const moveButton = wrapper.find(".move").find(ImageButton);

    expect(moveButton.props().disabled).toBe(true);
  });

  it("should handle kingdom overview click", () => {
    const props: AdventureButtonsProps = {
      onKingdomOverviewClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const kingdomOverviewButton = wrapper.find(".kingdom-overview").find(ImageButton);

    kingdomOverviewButton.props().onClick();

    expect(props.onKingdomOverviewClick).toHaveBeenCalled();
  });

  it("should handle end turn click", () => {
    const props: AdventureButtonsProps = {
      onEndTurnClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const endTurnButton = wrapper.find(".end-turn").find(ImageButton);

    endTurnButton.props().onClick();

    expect(props.onEndTurnClick).toHaveBeenCalled();

  });

  it("should handle adventure options click", () => {
    const props: AdventureButtonsProps = {
      onAdventureOptionsClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const adventureOptionsButton = wrapper.find(".adventure-options").find(ImageButton);

    adventureOptionsButton.props().onClick();

    expect(props.onAdventureOptionsClick).toHaveBeenCalled();

  });

  it("should handle game options click", () => {
    const props: AdventureButtonsProps = {
      onGameOptionsClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const gameOptionsButton = wrapper.find(".game-options").find(ImageButton);

    gameOptionsButton.props().onClick();

    expect(props.onGameOptionsClick).toHaveBeenCalled();
  });
});
