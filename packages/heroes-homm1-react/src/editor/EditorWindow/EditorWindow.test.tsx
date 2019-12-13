import { mount } from "enzyme";
import React from "react";

import { Direction } from "heroes-core";
import { byTestId } from "heroes-test-helpers";

import { EditorWindow, EditorWindowProps } from "./EditorWindow";

describe("EditorWindow", () => {
  it("should render adventure map", () => {
    const props: EditorWindowProps = {
      renderAdventureMap: () => "adventure map",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("adventure-map")).text()).toBe("adventure map");
  });

  it("should handle scroll top-left click", () => {
    const props: EditorWindowProps = {
      onScrollTopLeft: jest.fn(),
    };

    const wrapper = mount(<EditorWindow {...props} />);

    const control = wrapper.find(byTestId("scroll-top-left"));

    control.simulate("click");

    expect(props.onScrollTopLeft).toHaveBeenCalledWith(Direction.NorthWest);
  });

  it("should handle scroll top-right click", () => {
    const props: EditorWindowProps = {
      onScrollTopRight: jest.fn(),
    };

    const wrapper = mount(<EditorWindow {...props} />);

    const control = wrapper.find(byTestId("scroll-top-right"));

    control.simulate("click");

    expect(props.onScrollTopRight).toHaveBeenCalledWith(Direction.NorthEast);
  });

  it("should handle scroll bottom-left click", () => {
    const props: EditorWindowProps = {
      onScrollBottomLeft: jest.fn(),
    };

    const wrapper = mount(<EditorWindow {...props} />);

    const control = wrapper.find(byTestId("scroll-bottom-left"));

    control.simulate("click");

    expect(props.onScrollBottomLeft).toHaveBeenCalledWith(Direction.SouthWest);
  });

  it("should handle scroll bottom right click", () => {
    const props: EditorWindowProps = {
      onScrollBottomRight: jest.fn(),
    };

    const wrapper = mount(<EditorWindow {...props} />);

    const control = wrapper.find(byTestId("scroll-bottom-right"));

    control.simulate("click");

    expect(props.onScrollBottomRight).toHaveBeenCalledWith(Direction.SouthEast);
  });

  it("should render vertical cell numbers", () => {
    const props: EditorWindowProps = {
      renderVerticalCellNumbers: () => "vertical cell numbers",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("vertical-cell-numbers")).text()).toBe("vertical cell numbers");
  });

  it("should render horizontal cell numbers", () => {
    const props: EditorWindowProps = {
      renderHorizontalCellNumbers: () => "horizontal cell numbers",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("horizontal-cell-numbers")).text()).toBe("horizontal cell numbers");
  });

  it("should render vertical scrollbar", () => {
    const props: EditorWindowProps = {
      renderVerticalScrollbar: () => "vertical scrollbar",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("vertical-scrollbar")).text()).toBe("vertical scrollbar");
  });

  it("should render horizontal scrollbar", () => {
    const props: EditorWindowProps = {
      renderHorizontalScrollbar: () => "horizontal scrollbar",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("horizontal-scrollbar")).text()).toBe("horizontal scrollbar");
  });

  it("should render world map", () => {
    const props: EditorWindowProps = {
      renderWorldMap: () => "world map",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("world-map")).text()).toBe("world map");
  });

  it("should render options", () => {
    const props: EditorWindowProps = {
      renderOptions: () => "options",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("options")).text()).toBe("options");
  });

  it("should render option details", () => {
    const props: EditorWindowProps = {
      renderOptionDetails: () => "option details",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("option-details")).text()).toBe("option details");
  });

  it("should render buttons", () => {
    const props: EditorWindowProps = {
      renderButtons: () => "buttons",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    expect(wrapper.find(byTestId("buttons")).text()).toBe("buttons");
  });

  it("should not render message by default", () => {
    const wrapper = mount(<EditorWindow />);

    expect(wrapper.find(byTestId("message")).exists()).toBe(false);
  });

  it("should render message when set", () => {
    const props: EditorWindowProps = {
      message: "message",
    };

    const wrapper = mount(<EditorWindow {...props} />);

    const message = wrapper.find(byTestId("message"));

    expect(message.exists()).toBe(true);
    expect(message.text()).toBe("message");
  });
});
