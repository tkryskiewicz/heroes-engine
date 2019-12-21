import { Artifact, constructArtifact } from "./Artifact";

describe("constructArtifact", () => {
  it("should construct an artifact", () => {
    const result = constructArtifact("id");

    const expected: Artifact = {
      data: {},
      dataId: "id",
      id: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should construct artifact with data", () => {
    const result = constructArtifact("id", { property: "value" });

    const expected: Artifact = {
      data: {
        property: "value",
      },
      dataId: "id",
      id: "id",
    };

    expect(result).toEqual(expected);
  });
});
