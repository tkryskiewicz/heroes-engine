import { mount } from "enzyme";
import React from "react";

import { GameParagraph } from "./GameParagraph";

describe("GameParagraph", () => {
  it("should render content", () => {
    const wrapper = mount(<GameParagraph textSize="normal">Content</GameParagraph>);

    expect(wrapper.text()).toBe("Content");
  });
});
