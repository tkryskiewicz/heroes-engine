import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectOrientation, playerColor } from "../../stories";
import { ShipMapObject } from "./ShipMapObject";

storiesOf("map|ShipMapObject", module)
  .add("default", () => (
    <ShipMapObject
      playerColor={boolean("Owned?", true) ? playerColor("Player Color") : undefined}
      orientation={mapObjectOrientation("Orientation")}
      onClick={action("Click")}
    />
  ));
