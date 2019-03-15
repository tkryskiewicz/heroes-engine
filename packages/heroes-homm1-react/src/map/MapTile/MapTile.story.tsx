import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MapTile } from "./MapTile";

storiesOf("map/MapTile", module)
  .add("default", () => (
    <MapTile
      index={number("Index", 0, {})}
      onClick={action("Click")}
    >
      CONTENT
    </MapTile>
  ));
