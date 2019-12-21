import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectSize, terrain, terrainTransition } from "../../stories";
import { MapCell } from "./MapCell";

storiesOf("map|MapCell", module)
  .add("default", () => (
    <MapCell
      index={number("Index", 0, { range: true, min: 0, max: 100, step: 1 })}
      size={mapObjectSize("Size")}
      terrainType={terrain("Terrain")}
      terrainTransition={terrainTransition("Terrain Transition")}
      terrainVariant={number("Terrain Variant", 0, { range: true, min: 0, max: 3, step: 1 })}
      active={boolean("Active", false)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    >
      CONTENT
    </MapCell>
  ));
