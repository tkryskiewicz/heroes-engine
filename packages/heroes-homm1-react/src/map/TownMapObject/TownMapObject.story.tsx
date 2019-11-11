import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { mapObjectSize, playerColor, town } from "../../stories";
import { TownMapObject } from "./TownMapObject";

storiesOf("map|TownMapObject", module)
  .add("default", () => (
    <TownMapObject
      size={mapObjectSize("Size")}
      town={town("Town")}
      isCastleBuilt={boolean("Is Castle Built?", false)}
      playerColor={boolean("Owner?", true) ? playerColor("Player Color") : undefined}
      onClick={action("Click")}
    />
  ));
