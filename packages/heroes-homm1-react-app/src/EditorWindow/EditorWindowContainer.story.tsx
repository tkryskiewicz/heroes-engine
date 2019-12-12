import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { createMap, GameData, MapPoint } from "heroes-core";
import {
  EraseObjectsSettings,
  LandMassSetting,
  RandomMapSettings,
  Scenario,
  ScenarioDifficulty,
  ScenarioSize,
  ScenarioSpecification,
  terrains,
  TerrainType,
} from "heroes-homm1";
import { editorOption, mapObjectType, terrainType } from "heroes-homm1-react";

import { EditorWindow } from "./EditorWindowContainer";

const data: GameData = {
  armySize: 0,
  baseMovementCost: 0,
  creatures: {},
  editor: {
    heroArtifactCount: 0,
    maxCreatureCount: 0,
    maxHeroExperience: 0,
  },
  heroClasses: {},
  heroes: {},
  items: {},
  objects: {},
  playerColors: [],
  resources: {},
  spells: {},
  terrains: terrains.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  towns: {},
};

const map = createMap(38, 38, TerrainType.Water, 4);

const scenario: Scenario = {
  description: "No Description",
  difficulty: ScenarioDifficulty.Easy,
  filePrefix: "PREF",
  map,
  name: "No Name",
  size: ScenarioSize.Small,
};

const eraseObjectsSettings: EraseObjectsSettings = {
  allOverlays: false,
  clearEntire: false,
  objectTypes: [],
};

const scenarioSpecification: ScenarioSpecification = {
  description: "",
  difficulty: ScenarioDifficulty.Normal,
  filePrefix: "",
  name: "",
  size: ScenarioSize.Medium,
};

const randomMapSettings: RandomMapSettings = {
  landMass: LandMassSetting.Scattered,
  mines: 0,
  monsters: 0,
  mountains: 0,
  saveWithoutViewing: false,
  terrainAmount: {},
  treasures: 0,
  trees: 0,
};

storiesOf("EditorWindowContainer", module)
  .add("default", () => {
    const position: MapPoint = {
      x: number("X", 0, { range: true, min: 0, max: 80, step: 1 }),
      y: number("Y", 0, { range: true, min: 0, max: 80, step: 1 }),
    };

    return (
      <EditorWindow
        data={data}
        scenario={scenario}
        position={position}
        onPositionChange={action("Position Change")}
        selectedOption={editorOption("Selected Option")}
        onSelectedOptionChange={action("Selected Option Change")}
        selectedTerrain={terrainType("Selected Terrain")}
        onSelectedTerrainChange={action("Selected Terrain Change")}
        selectedObjectType={mapObjectType("Selected Object Type")}
        onSelectedObjectTypeChange={action("Selected Object Type Change")}
        objectsWindowVisible={boolean("Objects Window Visible", false)}

        eraseObjectsSettings={eraseObjectsSettings}
        eraseObjectsSettingsVisible={boolean("Erase Objects Settings Visible", false)}
        onOpenEraseObjectsSettingsClick={action("Open Erase Objects Settings Window Click")}
        onCloseEraseObjectsSettingsClick={action("Close Erase Objects Settings Window Click")}
        onEraseObjectsSettingsChange={action("Erase Objects Settings Change")}

        scenarioSpecification={scenarioSpecification}

        randomMapSettings={randomMapSettings}

        zoomed={boolean("Zoomed", false)}
        onZoomInClick={action("Zoom In Click")}
        onZoomOutClick={action("Zoom Out Click")}
        onUndoClick={action("Undo Click")}
        onNewClick={action("New Click")}
        onLoadClick={action("Load Click")}
        onSaveClick={action("Save Click")}
        onQuitClick={action("Quit Click")}
      />
    );
  });
