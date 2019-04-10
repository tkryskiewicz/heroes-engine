import { Item } from "../Item";
import {
  ArtifactMapObjectData,
  constructArtifactMapObjectArtifact,
  isArtifactMapObjectData,
} from "./ArtifactMapObject";
import { MapObjectData } from "./MapObject";

describe("isArtifactMapObjectData", () => {
  it("should return true when artifact object data", () => {
    const objectData: ArtifactMapObjectData = {
      artifact: "artifact",
      id: "dataId",
    };

    const result = isArtifactMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not artifact object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isArtifactMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("constructArtifactMapObjectArtifact", () => {
  it("should construct artifact", () => {
    const objectData: ArtifactMapObjectData = {
      artifact: "artifact",
      id: "dataId",
    };

    const result = constructArtifactMapObjectArtifact(objectData);

    const expected: Item = {
      data: {},
      id: "artifact",
    };

    expect(result).toEqual(expected);
  });
});
