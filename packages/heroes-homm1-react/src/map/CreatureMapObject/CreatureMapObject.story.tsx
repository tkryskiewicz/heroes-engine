import { storiesOf } from "@storybook/react";
import React from "react";

import { creature, mapObjectSize } from "../../stories";
import { CreatureMapObject } from "./CreatureMapObject";

storiesOf("map|CreatureMapObject", module)
  .add("default", () => (
    <CreatureMapObject
      size={mapObjectSize("Size")}
      creature={creature("Creature")}
    />
  ));
