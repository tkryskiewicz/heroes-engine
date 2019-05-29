import { Scenario } from "../Scenario";
import { ScenarioDifficulty } from "../ScenarioDifficulty";
import { ScenarioSize } from "../ScenarioSize";

export interface ScenarioSpecification {
  readonly difficulty: ScenarioDifficulty;
  readonly size: ScenarioSize;
  readonly name: string;
  readonly description: string;
  readonly filePrefix: string;
}

export const getScenarioSpecification = (scenario: Scenario): ScenarioSpecification => ({
  description: scenario.description,
  difficulty: scenario.difficulty,
  filePrefix: scenario.filePrefix,
  name: scenario.name,
  size: scenario.size,
});

export const setScenarioSpecification = (scenario: Scenario, value: ScenarioSpecification): Scenario => ({
  ...scenario,
  description: value.description,
  difficulty: value.difficulty,
  filePrefix: value.filePrefix || "~~~~",
  name: value.name,
  size: value.size,
});
