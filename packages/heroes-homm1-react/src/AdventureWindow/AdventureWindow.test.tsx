import { mount } from "enzyme";
import React from "react";

import { byTestId } from "heroes-test-helpers";

import { AdventureWindow, AdventureWindowProps } from "./AdventureWindow";

describe("AdventureWindow", () => {
  it("should render adventure map", () => {
    const props: AdventureWindowProps = {
      renderAdventureMap: () => "adventure map",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("adventure-map")).text()).toBe("adventure map");
  });

  it("should render world map", () => {
    const props: AdventureWindowProps = {
      renderWorldMap: () => "world map",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("world-map")).text()).toBe("world map");
  });

  it("should render adventure buttons", () => {
    const props: AdventureWindowProps = {
      renderAdventureButtons: () => "adventure buttons",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("adventure-buttons")).text()).toBe("adventure buttons");
  });

  it("should render hero locators", () => {
    const props: AdventureWindowProps = {
      renderHeroLocators: () => "hero locators",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("hero-locators")).text()).toBe("hero locators");
  });

  it("should render town locators", () => {
    const props: AdventureWindowProps = {
      renderTownLocators: () => "town locators",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("town-locators")).text()).toBe("town locators");
  });

  it("should render status window", () => {
    const props: AdventureWindowProps = {
      renderStatusWindow: () => "status text",
    };

    const wrapper = mount(<AdventureWindow {...props} />);

    expect(wrapper.find(byTestId("status-window")).text()).toBe("status text");
  });
});
