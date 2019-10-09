import { render } from "enzyme";
import React from "react";

import { GameText } from "./GameText";

describe("GameText", () => {
  it("should render", () => {
    const instance = (
      <GameText size="normal">
        Content
      </GameText>
    );

    const wrapper = render(instance);

    expect(wrapper).toBeDefined();
  });
});
