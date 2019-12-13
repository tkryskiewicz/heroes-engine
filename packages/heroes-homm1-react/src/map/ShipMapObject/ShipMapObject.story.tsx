import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { direction, playerColor } from "../../stories";
import { ShipMapObject } from "./ShipMapObject";

storiesOf("map|ShipMapObject", module)
  .add("default", () => (
    <ShipMapObject
      playerColor={boolean("Owned?", true) ? playerColor("Player Color") : undefined}
      orientation={direction("Orientation")}
      onClick={action("Click")}
    />
  ));
