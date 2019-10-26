import { mount } from "enzyme";
import React from "react";
import { byTestId } from "test-helpers";

import { ImageButton } from "../base";
import { AdventureOptionsWindow, AdventureOptionsWindowProps } from "./AdventureOptionsWindow";

describe("AdventureOptionsWindow", () => {
  it("should handle view world click", () => {
    const props: AdventureOptionsWindowProps = {
      onViewWorldClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const viewWorldButton = wrapper.find(byTestId("view-world")).find(ImageButton);

    viewWorldButton.props().onClick();

    expect(props.onViewWorldClick).toHaveBeenCalled();
  });

  it("should handle view puzzle click", () => {
    const props: AdventureOptionsWindowProps = {
      onViewPuzzleClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const viewPuzzleButton = wrapper.find(byTestId("view-puzzle")).find(ImageButton);

    viewPuzzleButton.props().onClick();

    expect(props.onViewPuzzleClick).toHaveBeenCalled();
  });

  it("should handle cast spell click", () => {
    const props: AdventureOptionsWindowProps = {
      onCastSpellClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const castSpellButton = wrapper.find(byTestId("cast-spell")).find(ImageButton);

    castSpellButton.props().onClick();

    expect(props.onCastSpellClick).toHaveBeenCalled();
  });

  it("should handle dig click", () => {
    const props: AdventureOptionsWindowProps = {
      onDigClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const digButton = wrapper.find(byTestId("dig")).find(ImageButton);

    digButton.props().onClick();

    expect(props.onDigClick).toHaveBeenCalled();

  });

  it("should handle okay click", () => {
    const props: AdventureOptionsWindowProps = {
      onOkayClick: jest.fn(),
      visible: true,
    };

    const wrapper = mount(<AdventureOptionsWindow {...props} />);

    const okayButton = wrapper.find(byTestId("okay")).find(ImageButton);

    okayButton.props().onClick();

    expect(props.onOkayClick).toHaveBeenCalled();
  });
});
