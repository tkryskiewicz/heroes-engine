import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObjectSize, terrainTransition, terrainType } from "../../stories";
import { MapTile } from "./MapTile";

storiesOf("map|MapTile", module)
  .add("default", () => (
    <MapTile
      index={number("Index", 0, { range: true, min: 0, max: 100, step: 1 })}
      size={mapObjectSize("Size")}
      terrainType={terrainType("Terrain Type")}
      terrainTransition={terrainTransition("Terrain Transition")}
      terrainVariant={number("Terrain Variant", 0, { range: true, min: 0, max: 3, step: 1 })}
      active={boolean("Active", false)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    >
      CONTENT
    </MapTile>
  ));
