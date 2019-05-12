import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { createMap, MapPoint } from "heroes-core";
import { EraseObjectsSettings, terrains, TerrainType } from "heroes-homm1";
import { editorObjectType, editorOption, terrainType } from "heroes-homm1-react";

import { EditorWindow, EditorWindowProps } from "./EditorWindowContainer";

const data: EditorWindowProps["data"] = {
  creatures: {},
  heroClasses: {},
  heroes: {},
  items: {},
  mapObjects: {},
  resources: {},
  spells: {},
  terrains: terrains.reduce((p, c) => ({
    ...p,
    [c.id]: c.id,
  }), {}),
};

const map = createMap(38, 38, TerrainType.Water);

const eraseObjectsSettings: EraseObjectsSettings = {
  allOverlays: false,
  clearEntire: false,
  objectTypes: [],
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
        map={map}
        position={position}
        onChangePosition={action("Change Position")}
        selectedOption={editorOption("Selected Option")}
        onSelectedOptionChange={action("Selected Option Change")}
        selectedTerrain={terrainType("Selected Terrain")}
        onSelectedTerrainChange={action("Selected Terrain Change")}
        selectedObjectType={editorObjectType("Selected Object Type")}
        onSelectedObjectTypeChange={action("Selected Object Type Change")}
        objectsWindowVisible={boolean("Objects Window Visible", false)}

        eraseObjectsSettings={eraseObjectsSettings}
        eraseObjectsSettingsVisible={boolean("Erase Objects Settings Visible", false)}
        onOpenEraseObjectsSettingsClick={action("Open Erase Objects Settings Window Click")}
        onCloseEraseObjectsSettingsClick={action("Close Erase Objects Settings Window Click")}
        onEraseObjectsSettingsChange={action("Erase Objects Settings Change")}

        zoomed={boolean("Zoomed", false)}
        onZoomInClick={action("Zoom In Click")}
        onZoomOutClick={action("Zoom Out Click")}
        onUndoClick={action("Undo Click")}
        onSpecsClick={action("Specs Click")}
        onRandomClick={action("Random Click")}
        onNewClick={action("New Click")}
        onLoadClick={action("Load Click")}
        onSaveClick={action("Save Click")}
        onQuitClick={action("Quit Click")}
      />
    );
  });
