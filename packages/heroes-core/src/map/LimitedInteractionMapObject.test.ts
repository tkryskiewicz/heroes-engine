import { Game } from "../Game";
import { Hero } from "../Hero";
import {
  createLimitedInteractionMapObject,
  getVisitor,
  handleLimitedInteractionMapObject,
  InteractionLimitType,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  LimitedInteractionMapObject,
  LimitedInteractionMapObjectData,
  wasVisitedBy,
} from "./LimitedInteractionMapObject";
import { createMap, getObject, placeObject } from "./Map";
import { MapObject, MapObjectData } from "./MapObject";

describe("isLimitedInteractionMapObjectData", () => {
  it("should return true when limited interaction object data", () => {
    const objectData: LimitedInteractionMapObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
    };

    const result = isLimitedInteractionMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not limited interaction object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
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
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
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
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
    };

    const result = getVisitor(objectData, "alignment", "hero");

    expect(result).toBe("alignment");
  });

  it("should return hero when once per hero", () => {
    const objectData: LimitedInteractionMapObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerHero,
    };

    const result = getVisitor(objectData, "alignment", "hero");

    expect(result).toBe("hero");
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

describe("handleLimitedInteractionMapObject", () => {
  it("should add visitor", () => {
    const objectData: LimitedInteractionMapObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
    };

    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [],
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        resources: {},
        spells: {},
      },
      heroes: [],
      map: placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handleLimitedInteractionMapObject(game, object, objectData, hero);

    const expected: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [
        "alignment",
      ],
    };

    expect(getObject(result.map, "id")).toEqual(expected);
  });

  it("should throw when object was already visited", () => {
    const objectData: LimitedInteractionMapObjectData = {
      id: "dataId",
      interactionLimit: InteractionLimitType.OncePerAlignment,
    };

    const object: LimitedInteractionMapObject = {
      dataId: "dataId",
      id: "id",
      visitedBy: [
        "alignment",
      ],
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        resources: {},
        spells: {},
      },
      heroes: [],
      map: placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    expect(() => {
      handleLimitedInteractionMapObject(game, object, objectData, hero);
    }).toThrow();
  });
});