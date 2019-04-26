import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { createMap } from "heroes-core";
import { terrains, TerrainType } from "heroes-homm1";
import { editorOption, terrainType } from "heroes-homm1-react";

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

const map = createMap(28, 28, TerrainType.Water);

storiesOf("EditorWindowContainer", module)
  .add("default", () => (
    <EditorWindow
      data={data}
      map={map}
      x={number("X", 0, { range: true, min: 0, max: 80, step: 1 })}
      y={number("Y", 0, { range: true, min: 0, max: 80, step: 1 })}
      onScroll={action("Scroll")}
      selectedOption={editorOption("Selected Option")}
      onSelectedOptionChange={action("Selected Option Change")}
      selectedTerrain={terrainType("Selected Terrain")}
      onSelectedTerrainChange={action("Selected Terrain Change")}
      onEraseTypesClick={action("Erase Types Click")}
      zoomed={boolean("Zoomed", false)}
      onZoomClick={action("Zoom Click")}
      onUndoClick={action("Undo Click")}
      onSpecsClick={action("Specs Click")}
      onRandomClick={action("Random Click")}
      onNewClick={action("New Click")}
      onLoadClick={action("Load Click")}
      onSaveClick={action("Save Click")}
      onQuitClick={action("Quit Click")}
    />
  ));
