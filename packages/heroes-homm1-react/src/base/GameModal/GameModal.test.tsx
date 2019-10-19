import { mount } from "enzyme";
import React from "react";
import { byTestId } from "test-helpers";

import { SystemButton } from "../SystemButton";
import { GameModal, GameModalProps } from "./GameModal";

describe("GameModal", () => {
  describe("yes/no type", () => {
    it("should render confirm/cancel buttons", () => {
      const props: GameModalProps = {
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      expect(confirmButton.exists()).toBe(true);
      expect(confirmButton.props().type).toBe("yes");

      expect(cancelButton.exists()).toBe(true);
      expect(cancelButton.props().type).toBe("no");
    });

    it("should not disable confirm by default", () => {
      const props: GameModalProps = {
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(false);
    });

    it("should disable confirm when set", () => {
      const props: GameModalProps = {
        confirmDisabled: true,
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(true);
    });

    it("should handle confirm click", () => {
      const props: GameModalProps = {
        onConfirmClick: jest.fn(),
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      confirmButton.props().onClick();

      expect(props.onConfirmClick).toHaveBeenCalled();
    });

    it("should handle cancel click", () => {
      const props: GameModalProps = {
        onCancelClick: jest.fn(),
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      cancelButton.props().onClick();

      expect(props.onCancelClick).toHaveBeenCalled();
    });
  });

  describe("okay/cancel type", () => {
    it("should render okay/cancel buttons", () => {
      const props: GameModalProps = {
        type: "okayCancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      expect(confirmButton.exists()).toBe(true);
      expect(confirmButton.props().type).toBe("okay");

      expect(cancelButton.exists()).toBe(true);
      expect(cancelButton.props().type).toBe("cancel");
    });

    it("should not disable confirm by default", () => {
      const props: GameModalProps = {
        type: "okayCancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(false);
    });

    it("should disable confirm when set", () => {
      const props: GameModalProps = {
        confirmDisabled: true,
        type: "okayCancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(true);
    });

    it("should handle confirm click", () => {
      const props: GameModalProps = {
        onConfirmClick: jest.fn(),
        type: "okayCancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      confirmButton.props().onClick();

      expect(props.onConfirmClick).toHaveBeenCalled();
    });

    it("should handle cancel click", () => {
      const props: GameModalProps = {
        onCancelClick: jest.fn(),
        type: "okayCancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      cancelButton.props().onClick();

      expect(props.onCancelClick).toHaveBeenCalled();
    });
  });

  describe("okay type", () => {
    it("should render okay button", () => {
      const props: GameModalProps = {
        type: "okay",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      expect(confirmButton.exists()).toBe(true);
      expect(confirmButton.props().type).toBe("okay");

      expect(cancelButton.exists()).toBe(false);
    });

    it("should not disable confirm by default", () => {
      const props: GameModalProps = {
        type: "okay",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(false);
    });

    it("should disable confirm when set", () => {
      const props: GameModalProps = {
        confirmDisabled: true,
        type: "okay",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(confirmButton.props().disabled).toBe(true);
    });

    it("should handle confirm click", () => {
      const props: GameModalProps = {
        onConfirmClick: jest.fn(),
        type: "okay",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      confirmButton.props().onClick();

      expect(props.onConfirmClick).toHaveBeenCalled();
    });
  });

  describe("cancel type", () => {
    it("should render cancel button", () => {
      const props: GameModalProps = {
        type: "cancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      const confirmButton = wrapper.find(byTestId("confirm")).find(SystemButton);

      expect(cancelButton.exists()).toBe(true);
      expect(cancelButton.props().type).toBe("cancel");

      expect(confirmButton.exists()).toBe(false);
    });

    it("should handle cancel click", () => {
      const props: GameModalProps = {
        onCancelClick: jest.fn(),
        type: "cancel",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const cancelButton = wrapper.find(byTestId("cancel")).find(SystemButton);

      cancelButton.props().onClick();

      expect(props.onCancelClick).toHaveBeenCalled();
    });
  });

  describe("size", () => {
    it("should by of size 1 by default", () => {
      const props: GameModalProps = {
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const bodyBlocks = wrapper.find(byTestId("body"));

      expect(bodyBlocks.length).toBe(1);
    });

    it("should change size", () => {
      const props: GameModalProps = {
        size: 2,
        type: "yesNo",
        visible: true,
      };

      const wrapper = mount(<GameModal {...props} />);

      const bodyBlocks = wrapper.find(byTestId("body"));

      expect(bodyBlocks.length).toBe(2);
    });
  });
});
