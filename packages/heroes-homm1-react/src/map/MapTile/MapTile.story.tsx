import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObjectSize, terrainType } from "../../stories";
import { MapTile } from "./MapTile";

storiesOf("map/MapTile", module)
  .add("default", () => (
    <MapTile
      index={number("Index", 0, { range: true, min: 0, max: 100, step: 1 })}
      size={mapObjectSize("Size")}
      terrainType={terrainType("Terrain Type")}
      active={boolean("Active", false)}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    >
      CONTENT
    </MapTile>
  ));
