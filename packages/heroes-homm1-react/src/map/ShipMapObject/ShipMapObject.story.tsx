import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MapObjectOrientation, MapObjectOrientations } from "heroes-core";

import { alignment } from "../../stories";
import { ShipMapObject } from "./ShipMapObject";

storiesOf("map/ShipMapObject", module)
  .add("default", () => (
    <ShipMapObject
      alignment={boolean("Aligned?", true) ? alignment("Alignment") : undefined}
      orientation={select("Orientation", MapObjectOrientations, MapObjectOrientation.North)}
      onClick={action("Click")}
    />
  ));
