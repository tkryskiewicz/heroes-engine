import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creature } from "../../stories";
import { CreatureMapObject, CreatureMapObjectProps } from "./CreatureMapObject";

const sizeOptions: { readonly [s: string]: CreatureMapObjectProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/CreatureMapObject", module)
  .add("default", () => (
    <CreatureMapObject
      size={select("Size", sizeOptions, "large")}
      creature={creature("Creature")}
    />
  ));
