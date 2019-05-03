import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, mapObjectOrientation } from "../../stories";
import { ShipMapObject } from "./ShipMapObject";

storiesOf("map/ShipMapObject", module)
  .add("default", () => (
    <ShipMapObject
      alignment={boolean("Aligned?", true) ? alignment("Alignment") : undefined}
      orientation={mapObjectOrientation("Orientation")}
      onClick={action("Click")}
    />
  ));
