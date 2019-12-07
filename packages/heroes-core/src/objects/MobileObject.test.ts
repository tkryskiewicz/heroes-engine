import { GameObject, GameObjectData } from "../GameObject";
import { MapObjectOrientation } from "../map";
import {
  canMobileObjectMove,
  initializeMobileObject,
  isMobileObject,
  isMobileObjectData,
  MobileObject,
  MobileObjectData,
  moveMobileObject,
  resetMobileObjectMobility,
} from "./MobileObject";

describe("isMobileObjectData", () => {
  it("should return true when mobile object data", () => {
    const objectData: MobileObjectData = {
      baseMobility: 0,
      id: "dataId",
    };

    const result = isMobileObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not mobile object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isMobileObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeMobileObject", () => {
  it("should initialize mobility and orientation", () => {
    const objectData: MobileObjectData = {
      baseMobility: 1,
      id: "dataId",
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeMobileObject(object, objectData);

    const expected: MobileObject = {
      ...object,
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    expect(result).toEqual(expected);
  });
});

describe("isMobileObject", () => {
  it("should return true when mobile object", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = isMobileObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not mobile object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isMobileObject(object);

    expect(result).toBe(false);
  });
});

describe("canMobileObjectMove", () => {
  it("should return false when mobility is zero", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = canMobileObjectMove(object);

    expect(result).toBe(false);
  });

  it("should return true when mobility greater than zero", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = canMobileObjectMove(object);

    expect(result).toBe(true);
  });
});

describe("moveMobileObject", () => {
  it("should change object orientation", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 0,
      orientation: MapObjectOrientation.North,
    };

    const result = moveMobileObject(object, MapObjectOrientation.South, 0);

    const expected: MobileObject = {
      ...object,
      orientation: MapObjectOrientation.South,
    };

    expect(result).toEqual(expected);
  });

  it("should reduce object mobility", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = moveMobileObject(object, MapObjectOrientation.North, 1);

    const expected: MobileObject = {
      ...object,
      mobility: 0,
    };

    expect(result).toEqual(expected);
  });
});

describe("resetMobileObjectMobility", () => {
  it("should set mobility to zero", () => {
    const object: MobileObject = {
      dataId: "dataId",
      id: "id",
      mobility: 1,
      orientation: MapObjectOrientation.North,
    };

    const result = resetMobileObjectMobility(object);

    expect(result.mobility).toBe(0);
  });
});
