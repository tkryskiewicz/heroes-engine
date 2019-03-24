import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObject } from "../../stories";
import { MapObject } from "./MapObject";

storiesOf("map/MapObject", module)
  .add("default", () => (
    <MapObject
      type={mapObject("Type")}
    />
  ));
