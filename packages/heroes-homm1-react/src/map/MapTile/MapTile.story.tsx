import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { terrainType } from "../../stories";
import { MapTile, MapTileProps } from "./MapTile";

const sizeOptions: { readonly [index: string]: MapTileProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/MapTile", module)
  .add("default", () => (
    <MapTile
      index={number("Index", 0, { range: true, min: 0, max: 100, step: 1 })}
      size={select("Size", sizeOptions, "large")}
      terrainType={terrainType("Terrain Type")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    >
      CONTENT
    </MapTile>
  ));
