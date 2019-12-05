import { createMapObject, MapObject, MapObjectData } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";
import {
  canMobileMapObjectMove,
  initializeMobileMapObject,
  isMobileMapObject,
  isMobileMapObjectData,
  MobileMapObject,
  MobileMapObjectData,
  moveMobileMapObject,
  resetMobileMapObjectMobility,
} from "./MobileMapObject";

describe("isMobileMapObjectData", () => {
  it("should return true when mobile map object data", () => {
    const objectData: MobileMapObjectData = {
      baseMobility: 0,
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isMobileMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not mobile map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isMobileMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeMobileMapObject", () => {
  it("should initialize mobility and orientation", () => {
    const objectData: MobileMapObjectData = {
      baseMobility: 1,
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeMobileMapObject(object, objectData);

    const expected: MobileMapObject = {
      ...object,
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    expect(result).toEqual(expected);
  });
});

describe("isMobileMapObject", () => {
  it("should return true when mobile map object", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = isMobileMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not mobile map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isMobileMapObject(object);

    expect(result).toBe(false);
  });
});

describe("canMobileMapObjectMove", () => {
  it("should return false when mobility is zero", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = canMobileMapObjectMove(object);

    expect(result).toBe(false);
  });

  it("should return true when mobility greater than zero", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = canMobileMapObjectMove(object);

    expect(result).toBe(true);
  });
});

describe("moveMobileMapObject", () => {
  it("should change object orientation", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = moveMobileMapObject(object, MapObjectOrientation.South, 0);

    const expected: MobileMapObject = {
      ...object,
      orientation: MapObjectOrientation.South,
    };

    expect(result).toEqual(expected);
  });

  it("should reduce object mobility", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = moveMobileMapObject(object, MapObjectOrientation.North, 1);

    const expected: MobileMapObject = {
      ...object,
      mobility: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("resetMobileMapObjectMobility", () => {
  it("should set mobility to zero", () => {
    const object: MobileMapObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = resetMobileMapObjectMobility(object);

    expect(result.mobility).toBe(0);
  });
});
