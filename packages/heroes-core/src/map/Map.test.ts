import { createMap, placeObject } from "./Map";
import { MapObject } from "./MapObject";

describe("createMap", () => {
  it("should correctly set size", () => {
    const result = createMap(10, 15, "terrain");

    expect(result.width).toBe(10);
    expect(result.height).toBe(15);
  });

  it("should throw when width is 0", () => {
    expect(() => {
      createMap(0, 15, "terrain");
    }).toThrow();
  });

  it("should throw when height is 0", () => {
    expect(() => {
      createMap(10, 0, "terrain");
    }).toThrow();
  });

  it("should initialize correct amount of tiles", () => {
    const result = createMap(10, 15, "terrain");

    expect(result.tiles.length).toBe(150);
  });

  it("should fill tiles with initial terrain", () => {
    const result = createMap(10, 15, "terrain");

    expect(result.tiles.every((t) => t.terrain === "terrain")).toBe(true);
  });

  it("should throw when no initial terrain is specified", () => {
    expect(() => {
      createMap(10, 15, "");
    }).toThrow();
  });
});

describe("placeObject", () => {
  it("should place object", () => {
    const object: MapObject = { type: "type" };

    const map = createMap(1, 1, "terrain");

    const result = placeObject(map, 0, 0, object);

    expect(result.tiles[0].object).toEqual(object);
  });

  it("should throw when x is negative", () => {
    const object: MapObject = { type: "type" };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, -1, 0, object);
    }).toThrow();
  });

  it("should throw when x is greater than map width", () => {
    const object: MapObject = { type: "type" };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, 1, 0, object);
    }).toThrow();
  });

  it("should throw when y is negative", () => {
    const object: MapObject = { type: "type" };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, 0, -1, object);
    }).toThrow();
  });

  it("should throw when y is greater than map height", () => {
    const object: MapObject = { type: "type" };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, 0, 1, object);
    }).toThrow();
  });

  it("should throw when object is already placed", () => {
    const objectA: MapObject = { type: "type" };

    let map = createMap(1, 1, "terrain");

    map = placeObject(map, 0, 0, objectA);

    const objectB: MapObject = { type: "type" };

    expect(() => {
      placeObject(map, 0, 0, objectB);
    }).toThrow();
  });
});
