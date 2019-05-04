import {
  createLimitedInteractionMapObject,
  getVisitor,
  InteractionLimitType,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  LimitedInteractionMapObject,
  LimitedInteractionMapObjectData,
  visitLimitedInteractionMapObject,
  wasVisitedBy,
} from "./LimitedInteractionMapObject";
import { MapObject, MapObjectData } from "./MapObject";
import { OwnableMapObject } from "./OwnableMapObject";

describe("isLimitedInteractionMapObjectData", () => {
  it("should return true when limited interaction object data", () => {
    const objectData: LimitedInteractionMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
      width: 1,
    };

    const result = isLimitedInteractionMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not limited interaction object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isLimitedInteractionMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isLimitedInteractionMapObject", () => {
  it("should return true when limited interaction object", () => {
    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = isLimitedInteractionMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not limited interaction object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isLimitedInteractionMapObject(object);

    expect(result).toBe(false);
  });
});

describe("createLimitedInteractionMapObject", () => {
  it("should create object", () => {
    const objectData: LimitedInteractionMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
      width: 1,
    };

    const result = createLimitedInteractionMapObject("id", objectData);

    const expected: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("getVisitor", () => {
  it("should return alignment when once per alignment", () => {
    const objectData: LimitedInteractionMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
      width: 1,
    };

    const object: OwnableMapObject = {
      dataId: "otherDataId",
      id: "id",
      owner: "alignment",
    };

    const result = getVisitor(objectData, object);

    expect(result).toBe("alignment");
  });

  it("should return object id when once per hero", () => {
    const objectData: LimitedInteractionMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerObject,
      width: 1,
    };

    const object: OwnableMapObject = {
      dataId: "otherDataId",
      id: "id",
      owner: "alignment",
    };

    const result = getVisitor(objectData, object);

    expect(result).toBe("id");
  });

  it("should throw when object is not owned", () => {
    const objectData: LimitedInteractionMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
      width: 1,
    };

    const object: OwnableMapObject = {
      dataId: "otherDataId",
      id: "id",
    };

    expect(() => {
      getVisitor(objectData, object);
    }).toThrow();
  });
});

describe("wasVisitedBy", () => {
  it("should return true when object was visited", () => {
    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [
        "visitor",
      ],
    };

    const result = wasVisitedBy(object, "visitor");

    expect(result).toBe(true);
  });

  it("should return false when object was not visited", () => {
    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = wasVisitedBy(object, "visitor");

    expect(result).toBe(false);
  });
});

describe("visitLimitedInteractionMapObject", () => {
  it("should add visitor", () => {
    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = visitLimitedInteractionMapObject(object, "visitor");

    const expected: LimitedInteractionMapObject = {
      ...object,
      visitedBy: [
        "visitor",
      ],
    };

    expect(result).toEqual(expected);
  });

  it("should throw when already visited", () => {
    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [
        "visitor",
      ],
    };

    expect(() => {
      visitLimitedInteractionMapObject(object, "visitor");
    }).toThrow();
  });
});
