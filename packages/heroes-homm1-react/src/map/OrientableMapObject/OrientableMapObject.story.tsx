import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { OrientableMapObject } from "./OrientableMapObject";

storiesOf("map|OrientableMapObject", module)
  .add("default", () => (
    <OrientableMapObject
      invert={boolean("Invert", false)}
    >
      CONTENT
    </OrientableMapObject>
  ));
