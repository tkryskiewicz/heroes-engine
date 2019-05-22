import { isVariantMapObjectData, VariantMapObjectData } from "./VariantMapObject";

describe("isVariantMapObjectData", () => {
  it("should return true when variant object data", () => {
    const objectData: VariantMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      variants: {},
      width: 1,
    };

    const result = isVariantMapObjectData(objectData);

    expect(result).toBe(true);
  });
});
