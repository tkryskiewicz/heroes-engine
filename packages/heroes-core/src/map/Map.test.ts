import { GameObject } from "../GameObject";
import { MapObjectData } from "../objects";
import {
  changeTerrain,
  createMap,
  everyMapObjectPoint,
  forEachMapObjectPoint,
  getCellIndex,
  getCellPoint,
  getObjectById,
  isPointTaken,
  isPointValid,
  Map,
  moveObject,
  placeObject,
  removeObject,
  replaceObject,
} from "./Map";
import { createPoint, isSamePoint } from "./MapPoint";

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

  it("should initialize correct amount of cells", () => {
    const result = createMap(10, 15, "terrain");

    expect(result.cells.length).toBe(150);
  });

  it("should fill cells with initial terrain", () => {
    const result = createMap(10, 15, "terrain");

    expect(result.cells.every((c) => c.terrain === "terrain")).toBe(true);
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

    const point = createPoint(0, 0);

    const result = isPointValid(map, point);

    expect(result).toBe(true);
  });

  it("should return false when x is negative", () => {
    const map = createMap(1, 1, "terrain");

    const point = createPoint(-1, 0);

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when x is greater than map width", () => {
    const map = createMap(1, 1, "terrain");

    const point = createPoint(1, 0);

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when y is negative", () => {
    const map = createMap(1, 1, "terrain");

    const point = createPoint(0, -1);

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });

  it("should return false when y is greater than map height", () => {
    const map = createMap(1, 1, "terrain");

    const point = createPoint(0, 1);

    const result = isPointValid(map, point);

    expect(result).toBe(false);
  });
});

describe("getCellIndex", () => {
  it("should return 0 for first cell", () => {
    const result = getCellIndex(1, createPoint(0, 0));

    expect(result).toBe(0);
  });

  it("should take x into account", () => {
    const result = getCellIndex(2, createPoint(1, 0));

    expect(result).toBe(1);
  });

  it("should take y into account", () => {
    const result = getCellIndex(1, createPoint(0, 1));

    expect(result).toBe(1);
  });
});

describe("getCellPoint", () => {
  it("should return (0,0) for index 0", () => {
    const result = getCellPoint(1, 0);

    const expected = createPoint(0, 0);

    expect(result).toEqual(expected);
  });

  it("should correctly resolve y", () => {
    const result = getCellPoint(1, 1);

    const expected = createPoint(0, 1);

    expect(result).toEqual(expected);
  });

  it("should correctly resolve x", () => {
    const result = getCellPoint(2, 1);

    const expected = createPoint(1, 0);

    expect(result).toEqual(expected);
  });
});

describe("changeTerrain", () => {
  it("should change terrain", () => {
    const map = createMap(1, 1, "terrain");

    const result = changeTerrain(map, createPoint(0, 0), "otherTerrain");

    expect(result.cells[getCellIndex(map.width, createPoint(0, 0))].terrain).toBe("otherTerrain");
  });

  it("should throw when point is invalid", () => {
    const map = createMap(1, 1, "terrain");

    expect(() => {
      changeTerrain(map, createPoint(1, 1), "otherTerrain");
    }).toThrow();
  });
});

describe("isPointTaken", () => {
  it("should return true when point is taken", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = placeObject(
      createMap(1, 1, "terrain"),
      createPoint(0, 0),
      object,
    );

    const result = isPointTaken(map, createPoint(0, 0));

    expect(result).toBe(true);
  });

  it("should return false when point is not taken", () => {
    const map = createMap(1, 1, "terrain");

    const result = isPointTaken(map, createPoint(0, 0));

    expect(result).toBe(false);
  });
});

describe("forEachMapObjectPoint", () => {
  it("should call callback for obstacle point", () => {
    const objectData: MapObjectData = {
      grid: [
        true,
      ],
      height: 1,
      id: "id",
      width: 1,
    };

    const callback = jest.fn();

    forEachMapObjectPoint(objectData, callback);

    expect(callback).toBeCalledWith(createPoint(0, 0));
  });

  it("should not call callback for non-obstacle point", () => {
    const objectData: MapObjectData = {
      grid: [
        false,
      ],
      height: 1,
      id: "id",
      width: 1,
    };

    const callback = jest.fn();

    forEachMapObjectPoint(objectData, callback);

    expect(callback).not.toBeCalled();
  });

  it("should not call callback for undefined point", () => {
    const objectData: MapObjectData = {
      grid: [
        undefined,
      ],
      height: 1,
      id: "id",
      width: 1,
    };

    const callback = jest.fn();

    forEachMapObjectPoint(objectData, callback);

    expect(callback).not.toBeCalled();
  });
});

describe("everyMapObjectPoint", () => {
  it("should return true when every point passes condition", () => {
    const objectData: MapObjectData = {
      grid: [
        true,
      ],
      height: 1,
      id: "id",
      width: 1,
    };

    const result = everyMapObjectPoint(objectData, () => true);

    expect(result).toBe(true);
  });

  it("should return false when no point passes condition", () => {
    const objectData: MapObjectData = {
      grid: [
        true,
      ],
      height: 1,
      id: "id",
      width: 1,
    };

    const result = everyMapObjectPoint(objectData, () => false);

    expect(result).toBe(false);
  });

  it("should return false when not every point passes condition", () => {
    const objectData: MapObjectData = {
      grid: [
        true, true,
      ],
      height: 1,
      id: "id",
      width: 2,
    };

    const result = everyMapObjectPoint(objectData, (point) => isSamePoint(point, createPoint(0, 0)));

    expect(result).toBe(false);
  });
});

describe("placeObject", () => {
  it("should place object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = createMap(1, 1, "terrain");

    const result = placeObject(map, createPoint(0, 0), object);

    expect(result.cells[0].object).toEqual(object);
  });

  it("should throw when point is invalid", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = createMap(1, 1, "terrain");

    expect(() => {
      placeObject(map, createPoint(1, 0), object);
    }).toThrow();
  });

  it("should throw when object is already placed", () => {
    const objectA: GameObject = {
      dataId: "dataId",
      id: "idB",
    };

    let map = createMap(1, 1, "terrain");

    map = placeObject(map, createPoint(0, 0), objectA);

    const objectB: GameObject = {
      dataId: "dataId",
      id: "idB",
    };

    expect(() => {
      placeObject(map, createPoint(0, 0), objectB);
    }).toThrow();
  });
});

describe("getObject", () => {
  it("should return object", () => {
    let map = createMap(1, 1, "terrain");

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    map = placeObject(map, createPoint(0, 0), object);

    const result = getObjectById(map, "id");

    expect(result).toEqual(object);
  });

  it("should return undefined when no object", () => {
    const map = createMap(1, 1, "terrain");

    const result = getObjectById(map, "id");

    expect(result).toBeUndefined();
  });
});

describe("moveObject", () => {
  it("should move object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, createPoint(0, 0), object);

    const result = moveObject(map, createPoint(0, 0), createPoint(1, 0));

    expect(result.cells[1].object).toEqual(object);
  });

  it("should throw when from is not a valid map point", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, createPoint(0, 0), object);

    expect(() => {
      moveObject(map, createPoint(2, 0), createPoint(1, 0));
    }).toThrow();
  });

  it("should throw when to is not a valid map point", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, createPoint(0, 0), object);

    expect(() => {
      moveObject(map, createPoint(0, 0), createPoint(2, 0));
    }).toThrow();
  });

  it("should throw when cell doesn't contain an object", () => {
    const map = createMap(2, 1, "terrain");

    expect(() => {
      moveObject(map, createPoint(0, 0), createPoint(1, 0));
    }).toThrow();
  });

  it("should throw when target cell already contains an object", () => {
    const objectA: GameObject = {
      dataId: "dataId",
      id: "idA",
    };

    let map = createMap(2, 1, "terrain");

    map = placeObject(map, createPoint(0, 0), objectA);

    const objectB: GameObject = {
      dataId: "dataId",
      id: "idB",
    };

    map = placeObject(map, createPoint(1, 0), objectB);

    expect(() => {
      moveObject(map, createPoint(0, 0), createPoint(1, 0));
    }).toThrow();
  });
});

describe("removeObject", () => {
  it("should remove object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const map = placeObject(createMap(1, 1, "terrain"), createPoint(0, 0), object);

    const result = removeObject(map, "id");

    const expected: Map = {
      cells: [
        {
          terrain: "terrain",
          terrainVariant: 0,
        },
      ],
      height: 1,
      terrainVariants: 0,
      width: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should change nothing when no object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "someId",
    };

    const map = placeObject(createMap(1, 1, "terrain"), createPoint(0, 0), object);

    const result = removeObject(map, "id");

    expect(result).toEqual(map);
  });
});

describe("replaceObject", () => {
  it("should replace object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    // TODO: remove, coverage dummy
    const otherObject: GameObject = {
      dataId: "otherDataId",
      id: "otherId",
    };

    const map = placeObject(
      placeObject(createMap(2, 1, "terrain"), createPoint(0, 0), object),
      createPoint(1, 0),
      otherObject);

    const updatedObject: GameObject = {
      dataId: "otherDataId",
      id: "id",
    };

    const result = replaceObject(map, updatedObject);

    const expected: Map = {
      ...map,
      cells: [
        {
          object: updatedObject,
          terrain: "terrain",
          terrainVariant: 0,
        },
        {
          object: otherObject,
          terrain: "terrain",
          terrainVariant: 0,
        },
      ],
    };

    expect(result).toEqual(expected);
  });
});
