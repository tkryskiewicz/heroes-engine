import { Input } from "antd";
import React from "react";

import { ScenarioDifficulty, ScenarioSize } from "heroes-homm1";
import { byTestId, mountWithIntl } from "heroes-test-helpers";

import { ImageButton } from "../base";
import { GameText } from "../core";
import { FileSelectorWindow, FileSelectorWindowProps } from "./FileSelectorWindow";

describe("FileSelectorWindow", () => {
  const defaultProps: FileSelectorWindowProps = {
    visible: true,
  };

  describe("type", () => {
    it("should render title when save", () => {
      const props: FileSelectorWindowProps = {
        ...defaultProps,
        type: "save",
      };

      const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

      expect(wrapper.find(byTestId("title")).text()).toBe("File to Save:");
    });

    it("should render title when load", () => {
      const props: FileSelectorWindowProps = {
        ...defaultProps,
        type: "load",
      };

      const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

      expect(wrapper.find(byTestId("title")).text()).toBe("File to Load:");
    });
  });

  it("should render file list", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      files: [
        "fileA",
        "fileB",
      ],
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const files = wrapper.find(byTestId("file")).find(byTestId("name"));

    expect(files.length).toBe(2);
    expect(files.at(0).text()).toBe("fileA");
    expect(files.at(1).text()).toBe("fileB");
  });

  it("should render a file selected", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      files: [
        "file",
      ],
      selectedFile: "file",
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const file = wrapper.find(byTestId("file")).find(byTestId("name")).find(GameText);

    expect(file.props().selected).toBe(true);
  });

  it("should handle file click", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      files: [
        "file",
      ],
      onFileClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const file = wrapper.find(byTestId("file"));

    file.simulate("click");

    expect(props.onFileClick).toBeCalledWith("file");
  });

  it("should render value", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      value: "value",
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const input = wrapper.find(Input);

    expect(input.props().value).toBe("value");
  });

  it("should handle value change", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      onValueChange: jest.fn(),
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const input = wrapper.find(Input);

    input.simulate("change", { target: { value: "value" }});

    expect(props.onValueChange).toHaveBeenCalledWith("value");
  });

  it("should respect max length", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      maxLength: 1,
      onValueChange: jest.fn(),
      value: "v",
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const input = wrapper.find(Input);

    input.simulate("change", { target: { value: "va" }});

    expect(props.onValueChange).not.toHaveBeenCalledWith();
  });

  it("should not disable okay by default", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const control = wrapper.find(byTestId("okay")).find(ImageButton);

    expect(control.props().disabled).toBe(false);
  });

  it("should disable okay when set", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      confirmDisabled: true,
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const control = wrapper.find(byTestId("okay")).find(ImageButton);

    expect(control.props().disabled).toBe(true);
  });

  it("should handle okay click", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      onOkayClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const control = wrapper.find(byTestId("okay")).find(ImageButton);

    control.props().onClick();

    expect(props.onOkayClick).toBeCalled();
  });

  it("should handle cancel click", () => {
    const props: FileSelectorWindowProps = {
      ...defaultProps,
      onCancelClick: jest.fn(),
    };

    const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

    const control = wrapper.find(byTestId("cancel")).find(ImageButton);

    control.props().onClick();

    expect(props.onCancelClick).toBeCalled();
  });

  describe("scenario info", () => {
    it("should not render by default", () => {
      const wrapper = mountWithIntl(<FileSelectorWindow {...defaultProps} />);

      expect(wrapper.find(byTestId("scenario-info")).exists()).toBe(false);
    });

    it("should render when set", () => {
      const props: FileSelectorWindowProps = {
        ...defaultProps,
        scenarioInfo: {
          description: "Description",
          difficulty: ScenarioDifficulty.Easy,
          size: ScenarioSize.Small,
        },
      };

      const wrapper = mountWithIntl(<FileSelectorWindow {...props} />);

      const scenarioInfo = wrapper.find(byTestId("scenario-info"));

      expect(scenarioInfo.exists()).toBe(true);
      expect(scenarioInfo.find(byTestId("scenario-size")).text()).toBe("Small");
      expect(scenarioInfo.find(byTestId("scenario-difficulty")).text()).toBe("Easy");
      expect(scenarioInfo.find(byTestId("scenario-description")).text()).toBe("Description");
    });
  });
});
