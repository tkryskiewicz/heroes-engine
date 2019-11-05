import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { EditorButtons, EditorButtonsProps } from "./EditorButtons";

describe("EditorButtons", () => {
  it("should handle zoom click", () => {
    const props: EditorButtonsProps = {
      onZoomClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("zoom")).simulate("click");

    expect(props.onZoomClick).toHaveBeenCalled();
  });

  it("should handle undo click", () => {
    const props: EditorButtonsProps = {
      onUndoClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("undo")).simulate("click");

    expect(props.onUndoClick).toHaveBeenCalled();
  });

  it("should handle specs click", () => {
    const props: EditorButtonsProps = {
      onSpecsClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("specs")).simulate("click");

    expect(props.onSpecsClick).toHaveBeenCalled();
  });

  it("should handle random click", () => {
    const props: EditorButtonsProps = {
      onRandomClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("random")).simulate("click");

    expect(props.onRandomClick).toHaveBeenCalled();
  });

  it("should handle new click", () => {
    const props: EditorButtonsProps = {
      onNewClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("new")).simulate("click");

    expect(props.onNewClick).toHaveBeenCalled();
  });

  it("should handle load click", () => {
    const props: EditorButtonsProps = {
      onLoadClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("load")).simulate("click");

    expect(props.onLoadClick).toHaveBeenCalled();
  });

  it("should handle save click", () => {
    const props: EditorButtonsProps = {
      onSaveClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("save")).simulate("click");

    expect(props.onSaveClick).toHaveBeenCalled();
  });

  it("should handle quit click", () => {
    const props: EditorButtonsProps = {
      onQuitClick: jest.fn(),
    };

    const wrapper = mount(<EditorButtons {...props} />);

    wrapper.find(byTestId("quit")).simulate("click");

    expect(props.onQuitClick).toHaveBeenCalled();
  });
});
