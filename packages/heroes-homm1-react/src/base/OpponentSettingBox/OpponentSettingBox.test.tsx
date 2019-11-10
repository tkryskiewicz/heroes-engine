import { mount } from "enzyme";
import React from "react";

import { OpponentSetting } from "heroes-homm1";

import { opponentSettingImages } from "./assets";

import { OpponentSettingBox, OpponentSettingBoxProps } from "./OpponentSettingBox";

describe("OpponentSettingBox", () => {
  it("should render value", () => {
    const props: OpponentSettingBoxProps = {
      value: OpponentSetting.Dumb,
    };

    const wrapper = mount(<OpponentSettingBox {...props} />);

    expect(wrapper.find(HTMLImageElement).props().src).toBe(opponentSettingImages.dumb);
  });

  it("should handle click", () => {
    const props: OpponentSettingBoxProps = {
      index: 0,
      onClick: jest.fn(),
      value: OpponentSetting.Genius,
    };

    const wrapper = mount(<OpponentSettingBox {...props} />);

    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalledWith(0, OpponentSetting.Genius);
  });
});
