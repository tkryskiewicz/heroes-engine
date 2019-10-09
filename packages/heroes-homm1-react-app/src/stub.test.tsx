import { render } from "enzyme";
import React from "react";

// FIXME: any tests importing from "heroes-homm1-react" will fail because require.context
// is not mocked
describe("stub", () => {
  it("should render", () => {
    const instance = (
      <div>
        Content
      </div>
    );

    const wrapper = render(instance);

    expect(wrapper).toBeDefined();
  });
});
