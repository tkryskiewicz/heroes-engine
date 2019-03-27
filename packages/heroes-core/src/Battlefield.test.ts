import { createBattlefield } from "./Battlefield";

describe("createBattlefield", () => {
  it("should create battlefield", () => {
    const result = createBattlefield(15, 10, "terrain", false, 3);

    expect(result.width).toBe(15);
    expect(result.height).toBe(10);
    expect(result.terrainType).toBe("terrain");
    expect(result.woodyTerrain).toBe(false);
    expect(result.cells.every((c) => c.terrainVariant >= 0 && c.terrainVariant <= 3)).toBe(true);
  });
});
