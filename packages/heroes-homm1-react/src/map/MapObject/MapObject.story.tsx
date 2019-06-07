import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObject, mapObjectSize } from "../../stories";
import { MapObject } from "./MapObject";

storiesOf("map|MapObject", module)
  .add("default", () => (
    <MapObject
      size={mapObjectSize("Size")}
      type={mapObject("Type")}
    />
  ));
