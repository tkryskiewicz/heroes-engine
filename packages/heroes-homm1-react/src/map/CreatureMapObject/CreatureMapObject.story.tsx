import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creature } from "../../stories";
import { CreatureMapObject } from "./CreatureMapObject";

storiesOf("map/CreatureMapObject", module)
  .add("default", () => (
    <CreatureMapObject
      creature={creature("Creature")}
    />
  ));
