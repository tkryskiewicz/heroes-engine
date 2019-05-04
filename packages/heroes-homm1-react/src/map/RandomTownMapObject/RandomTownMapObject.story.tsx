import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObjectSize } from "../../stories";
import { RandomTownMapObject } from "./RandomTownMapObject";

storiesOf("map/RandomTownMapObject", module)
  .add("default", () => (
    <RandomTownMapObject
      size={mapObjectSize("Size")}
      isCastleBuilt={boolean("Is Castle Built?", false)}
    />
  ));
