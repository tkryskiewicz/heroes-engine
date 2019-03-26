import { Artifact } from "heroes-core";

import { constructArtifact } from "./artifacts";

describe("constructArtifact", () => {
  it("should construct an artifact", () => {
    const result = constructArtifact("artifact");

    const expected: Artifact = {
      data: {},
      id: "artifact",
      tradable: true,
    };

    expect(result).toEqual(expected);
  });

  it("should construct artifact with data", () => {
    const result = constructArtifact("artifact", { property: "value" });

    const expected: Artifact = {
      data: {
        property: "value",
      },
      id: "artifact",
      tradable: true,
    };

    expect(result).toEqual(expected);
  });

  it("should construct tradable artifacts by default", () => {
    const result = constructArtifact("artifact");

    expect(result.tradable).toBe(true);
  });

  it("should construct non-tradable artifact", () => {
    const result = constructArtifact("artifact", [], false);

    expect(result.tradable).toBe(false);
  });
});
