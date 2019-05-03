import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mapObjectSize } from "../../stories";
import { RandomCreatureMapObject } from "./RandomCreatureMapObject";

storiesOf("map/RandomCreatureMapObject", module)
  .add("default", () => (
    <RandomCreatureMapObject
      size={mapObjectSize("Size")}
    />
  ))
  .add("specific level", () => (
    <RandomCreatureMapObject
      size={mapObjectSize("Size")}
      level={number("Level", 1, { range: true, min: 1, max: 4, step: 1 })}
    />
  ));
