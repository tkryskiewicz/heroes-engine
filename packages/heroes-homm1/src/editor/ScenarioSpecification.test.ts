import { createMap } from "heroes-core";

import { Scenario } from "../Scenario";
import { ScenarioDifficulty } from "../ScenarioDifficulty";
import { ScenarioSize } from "../ScenarioSize";
import {
  createDefaultScenarioSpecification,
  getScenarioSpecification,
  ScenarioSpecification,
  setScenarioSpecification,
} from "./ScenarioSpecification";

describe("createDefaultScenarioSpecification", () => {
  it("should return default specification", () => {
    const result = createDefaultScenarioSpecification();

    const expected: ScenarioSpecification = {
      description: "No Description",
      difficulty: ScenarioDifficulty.Normal,
      filePrefix: "VJVF",
      name: "No Name",
      size: ScenarioSize.Medium,
    };

    expect(result).toEqual(expected);
  });
});

describe("getScenarioSpecification", () => {
  it("should return specification", () => {
    const scenario: Scenario = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      map: createMap(1, 1, "terrain"),
      name: "name",
      size: ScenarioSize.Small,
    };

    const result = getScenarioSpecification(scenario);

    const expected: ScenarioSpecification = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      name: "name",
      size: ScenarioSize.Small,
    };

    expect(result).toEqual(expected);
  });
});

describe("setScenarioSpecification", () => {
  it("should set specification", () => {
    const scenario: Scenario = {
      description: "",
      difficulty: ScenarioDifficulty.Normal,
      filePrefix: "",
      map: createMap(1, 1, "terrain"),
      name: "",
      size: ScenarioSize.Medium,
    };

    const value: ScenarioSpecification = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      name: "name",
      size: ScenarioSize.Small,
    };

    const result = setScenarioSpecification(scenario, value);

    const expected: Scenario = {
      ...scenario,
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      name: "name",
      size: ScenarioSize.Small,
    };

    expect(result).toEqual(expected);
  });

  it("should set default file prefix value when empty", () => {
    const scenario: Scenario = {
      description: "",
      difficulty: ScenarioDifficulty.Normal,
      filePrefix: "",
      map: createMap(1, 1, "terrain"),
      name: "",
      size: ScenarioSize.Medium,
    };

    const value: ScenarioSpecification = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "",
      name: "name",
      size: ScenarioSize.Small,
    };

    const result = setScenarioSpecification(scenario, value);

    expect(result.filePrefix).toBe("~~~~");
  });
});
