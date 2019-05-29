import { Scenario as CoreScenario } from "heroes-core";

import { ScenarioDifficulty } from "./ScenarioDifficulty";
import { ScenarioSize } from "./ScenarioSize";

export interface Scenario extends CoreScenario {
  readonly difficulty: ScenarioDifficulty;
  readonly size: ScenarioSize;
  readonly filePrefix: string;
}
