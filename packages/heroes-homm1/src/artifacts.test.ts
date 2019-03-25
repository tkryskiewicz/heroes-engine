import { Artifact } from "heroes-core";

import { ArtifactId, constructArtifact } from "./artifacts";

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

  it("should construct tradable artifacts by default", () => {
    const result = constructArtifact(ArtifactId.ArcaneNecklaceOfMagic);

    expect(result.tradable).toBe(true);
  });

  it("should construct non-tradable artifact when spell book", () => {
    const result = constructArtifact(ArtifactId.Spellbook, []);

    expect(result.tradable).toBe(false);
  });
});
