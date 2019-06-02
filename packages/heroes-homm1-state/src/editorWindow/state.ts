import { MapPoint } from "heroes-core";
import {
  EditorObjectType,
  EditorOption,
  EraseObjectsSettings,
  MapObjectDetails,
  RandomMapSettings,
  Scenario,
  ScenarioSpecification,
} from "heroes-homm1";

export interface EditorWindowState {
  readonly scenario: Scenario;
  readonly position: MapPoint;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly selectedObjectType: EditorObjectType;
  readonly selectedObject?: string;
  readonly objectsWindowVisible: boolean;
  readonly visibleObjectDetails?: string;
  readonly selectedObjectDetails?: MapObjectDetails;
  readonly objectDetailsUnavailablePromptVisible: boolean;
  readonly eraseObjectsSettings: EraseObjectsSettings;
  readonly eraseObejctsSettingsVisible: boolean;
  readonly scenarioSpecification: ScenarioSpecification;
  readonly scenarioSpecificationVisible: boolean;
  readonly randomMapSettings: RandomMapSettings;
  readonly randomMapSettingsVisible: boolean;
  readonly zoomed: boolean;
}
