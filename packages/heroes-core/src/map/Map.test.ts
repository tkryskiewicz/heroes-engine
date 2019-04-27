import {
  createMap,
  getObject,
  getTilePoint,
  isPointValid,
  Map,
  moveObject,
  placeObject,
  removeObject,
  replaceObject,
} from "./Map";
import { MapObject } from "./MapObject";
import { MapPoint } from "./MapPoint";

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

describe("isPointValid", () => {
  it("should return true when point is valid", () => {
    const map = createMap(1, 1, "terrain");

    const point: MapPoint = { x: 0, y: 0 };

    const result = isPointValid(map, point);

    expect(result).toBe(true);
  });

  it("should return false when x is negative", () => {
    const map = createMap(1, 1, "terrain");

    const point: MapPoint = { x: -1, y: 0 };

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when x is greater than map width", () => {
    const map = createMap(1, 1, "terrain");

    const point: MapPoint = { x: 1, y: 0 };

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when y is negative", () => {
    const map = createMap(1, 1, "terrain");

    const point: MapPoint = { x: 0, y: -1 };

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when y is greater than map height", () => {
    const map = createMap(1, 1, "terrain");

    const point: MapPoint = { x: 0, y: 1 };

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });
});

describe("getTilePoint", () => {
  it("should return (0,0) for index 0", () => {
    const result = getTilePoint(1, 0);

    const expected: MapPoint = {
      x: 0,
      y: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should correctly resolve y", () => {
    const result = getTilePoint(1, 1);

    const expected: MapPoint = {
      x: 0,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should correctly resolve x", () => {
    const result = getTilePoint(2, 1);

    const expected: MapPoint = {
      x: 1,
      y: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("placeObject", () => {
  it("should place object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = createMap(1, 1, "terrain");

    const result = placeObject(map, { x: 0, y: 0 }, object);

    expect(result.tiles[0].object).toEqual(object);
  });

  it("should throw when point is invalid", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, { x: 1, y: 0 }, object);
    }).toThrow();
  });

  it("should throw when object is already placed", () => {
    const objectA: MapObject = {
      dataId: "dataId",
      id: "idB",
    };

    let map = createMap(1, 1, "terrain");

    map = placeObject(map, { x: 0, y: 0 }, objectA);

    const objectB: MapObject = {
      dataId: "dataId",
      id: "idB",
    };

    expect(() => {
      placeObject(map, { x: 0, y: 0 }, objectB);
    }).toThrow();
  });
});

describe("getObject", () => {
  it("should return object", () => {
    let map = createMap(1, 1, "terrain");

    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    map = placeObject(map, { x: 0, y: 0 }, object);

    const result = getObject(map, "id");

    expect(result).toEqual(object);
  });

  it("should return undefined when no object", () => {
    const map = createMap(1, 1, "terrain");

    const result = getObject(map, "id");

    expect(result).toBeUndefined();
  });
});

describe("moveObject", () => {
  it("should move object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, { x: 0, y: 0 }, object);

    const result = moveObject(map, { x: 0, y: 0 }, { x: 1, y: 0 });

    expect(result.tiles[1].object).toEqual(object);
  });

  it("should throw when from is not a valid map point", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, { x: 0, y: 0 }, object);

    expect(() => {
      moveObject(map, { x: 2, y: 0 }, { x: 1, y: 0 });
    }).toThrow();
  });

  it("should throw when to is not a valid map point", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, { x: 0, y: 0 }, object);

    expect(() => {
      moveObject(map, { x: 0, y: 0 }, { x: 2, y: 0 });
    }).toThrow();
  });

  it("should throw when tile doesn't contain an object", () => {
    const map = createMap(2, 1, "terrain");

    expect(() => {
      moveObject(map, { x: 0, y: 0 }, { x: 1, y: 0 });
    }).toThrow();
  });

  it("should throw when target tile already contains an object", () => {
    const objectA: MapObject = {
      dataId: "dataId",
      id: "idA",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, { x: 0, y: 0 }, objectA);

    const objectB: MapObject = {
      dataId: "dataId",
      id: "idB",
    };

    map = placeObject(map, { x: 1, y: 0 }, objectB);

    expect(() => {
      moveObject(map, { x: 0, y: 0 }, { x: 1, y: 0 });
    }).toThrow();
  });
});

describe("removeObject", () => {
  it("should remove object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object);

    const result = removeObject(map, "id");

    const expected: Map = {
      height: 1,
      tiles: [
        {
          terrain: "terrain",
        },
      ],
      width: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should change nothing when no object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "someId",
    };

    const map = placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object);

    const result = removeObject(map, "id");

    expect(result).toEqual(map);
  });
});

describe("replaceObject", () => {
  it("should replace object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    // TODO: remove, coverage dummy
    const otherObject: MapObject = {
      dataId: "otherDataId",
      id: "otherId",
    };

    const map = placeObject(
      placeObject(createMap(2, 1, "terrain"), { x: 0, y: 0 }, object),
      { x: 1, y: 0 },
      otherObject);

    const updatedObject: MapObject = {
      dataId: "otherDataId",
      id: "id",
    };

    const result = replaceObject(map, updatedObject);

    const expected: Map = {
      ...map,
      tiles: [
        {
          object: updatedObject,
          terrain: "terrain",
        },
        {
          object: otherObject,
          terrain: "terrain",
        },
      ],
    };

    expect(result).toEqual(expected);
  });
});
