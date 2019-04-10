import { Artifact } from "./Artifact";
import { constructArtifact } from "./artifacts";

describe("constructArtifact", () => {
  it("should construct an artifact", () => {
    const result = constructArtifact("artifact");

    const expected: Artifact = {
      data: {},
      id: "artifact",
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
    };

    expect(result).toEqual(expected);
  });
});
