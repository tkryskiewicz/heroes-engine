import { mount } from "enzyme";
import React from "react";

import { MainWindow } from "./MainWindow";

describe("MainWindow", () => {
  it("should render content", () => {
    const wrapper = mount(<MainWindow>Content</MainWindow>);

    expect(wrapper.text()).toBe("Content");
  });
});
