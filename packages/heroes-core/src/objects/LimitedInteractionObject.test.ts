import { GameObject, GameObjectData } from "../GameObject";
import {
  getVisitor,
  initializeLimitedInteractionObject,
  InteractionLimitType,
  isLimitedInteractionObject,
  isLimitedInteractionObjectData,
  LimitedInteractionObject,
  LimitedInteractionObjectData,
  visitObject,
  wasVisitedBy,
} from "./LimitedInteractionObject";
import { OwnableObject } from "./OwnableObject";

describe("isLimitedInteractionObjectData", () => {
  it("should return true when limited interaction object data", () => {
    const objectData: LimitedInteractionObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerPlayer,
    };

    const result = isLimitedInteractionObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not limited interaction object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isLimitedInteractionObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isLimitedInteractionObject", () => {
  it("should return true when limited interaction object", () => {
    const object: LimitedInteractionObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = isLimitedInteractionObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not limited interaction object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isLimitedInteractionObject(object);

    expect(result).toBe(false);
  });
});

describe("initializeLimitedInteractionObject", () => {
  it("should initialize visted by", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeLimitedInteractionObject(object);

    const expected: LimitedInteractionObject = {
      ...object,
      visitedBy: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("getVisitor", () => {
  it("should return player when once per player", () => {
    const objectData: LimitedInteractionObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerPlayer,
    };

    const object: OwnableObject = {
      dataId: "otherDataId",
      id: "id",
      owner: "player",
    };

    const result = getVisitor(objectData, object);

    expect(result).toBe("player");
  });

  it("should return object id when once per hero", () => {
    const objectData: LimitedInteractionObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerObject,
    };

    const object: OwnableObject = {
      dataId: "otherDataId",
      id: "id",
      owner: "player",
    };

    const result = getVisitor(objectData, object);

    expect(result).toBe("id");
  });

  it("should throw when object is not owned", () => {
    const objectData: LimitedInteractionObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerPlayer,
    };

    const object: OwnableObject = {
      dataId: "otherDataId",
      id: "id",
      owner: undefined,
    };

    expect(() => {
      getVisitor(objectData, object);
    }).toThrow();
  });
});

describe("wasVisitedBy", () => {
  it("should return true when object was visited", () => {
    const object: LimitedInteractionObject = {
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
    const object: LimitedInteractionObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = wasVisitedBy(object, "visitor");

    expect(result).toBe(false);
  });
});

describe("visitObject", () => {
  it("should add visitor", () => {
    const object: LimitedInteractionObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const result = visitObject(object, "visitor");

    const expected: LimitedInteractionObject = {
      ...object,
      visitedBy: [
        "visitor",
      ],
    };

    expect(result).toEqual(expected);
  });

  it("should throw when already visited", () => {
    const object: LimitedInteractionObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [
        "visitor",
      ],
    };

    expect(() => {
      visitObject(object, "visitor");
    }).toThrow();
  });
});
