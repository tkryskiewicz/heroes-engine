import { isVariantObjectData, VariantObjectData } from "./VariantObject";

describe("isVariantObjectData", () => {
  it("should return true when variant object data", () => {
    const objectData: VariantObjectData = {
      id: "dataId",
      variants: {},
    };

    const result = isVariantObjectData(objectData);

    expect(result).toBe(true);
  });
});
