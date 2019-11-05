import { shallow } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { ImageButton } from "../base";
import { AdventureButtons, AdventureButtonsProps } from "./AdventureButtons";

describe("AdventureButtons", () => {
  it("should handle next hero click", () => {
    const props: AdventureButtonsProps = {
      onNextHeroClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("next-hero"));

    control.simulate("click");

    expect(props.onNextHeroClick).toHaveBeenCalled();
  });

  it("should not disable next hero by default", () => {
    const wrapper = shallow(<AdventureButtons />);

    const control = wrapper.find(byTestId("next-hero")).find(ImageButton);

    expect(control.props().disabled).toBe(false);
  });

  it("should disable next hero when set", () => {
    const props: AdventureButtonsProps = {
      nextHeroDisabled: true,
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("next-hero")).find(ImageButton);

    expect(control.props().disabled).toBe(true);
  });

  it("should handle move click", () => {
    const props: AdventureButtonsProps = {
      onMoveClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("move"));

    control.simulate("click");

    expect(props.onMoveClick).toHaveBeenCalled();
  });

  it("should not disable move by default", () => {
    const wrapper = shallow(<AdventureButtons />);

    const control = wrapper.find(byTestId("move")).find(ImageButton);

    expect(control.props().disabled).toBe(false);
  });

  it("should disable move when set", () => {
    const props: AdventureButtonsProps = {
      moveDisabled: true,
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("move")).find(ImageButton);

    expect(control.props().disabled).toBe(true);
  });

  it("should handle kingdom overview click", () => {
    const props: AdventureButtonsProps = {
      onKingdomOverviewClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("kingdom-overview"));

    control.simulate("click");

    expect(props.onKingdomOverviewClick).toHaveBeenCalled();
  });

  it("should handle end turn click", () => {
    const props: AdventureButtonsProps = {
      onEndTurnClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("end-turn"));

    control.simulate("click");

    expect(props.onEndTurnClick).toHaveBeenCalled();

  });

  it("should handle adventure options click", () => {
    const props: AdventureButtonsProps = {
      onAdventureOptionsClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("adventure-options"));

    control.simulate("click");

    expect(props.onAdventureOptionsClick).toHaveBeenCalled();

  });

  it("should handle game options click", () => {
    const props: AdventureButtonsProps = {
      onGameOptionsClick: jest.fn(),
    };

    const wrapper = shallow(<AdventureButtons {...props} />);

    const control = wrapper.find(byTestId("game-options"));

    control.simulate("click");

    expect(props.onGameOptionsClick).toHaveBeenCalled();
  });
});
