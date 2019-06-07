import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creature } from "../../stories";
import { CreatureIcon, CreatureIconProps } from "./CreatureIcon";

const sizeOptions: { readonly [s: string]: CreatureIconProps["size"] } = {
  Large: "large",
  Medium: "medium",
  Small: "small",
  Tiny: "tiny",
};

storiesOf("base|CreatureIcon", module)
  .add("default", () => (
    <CreatureIcon
      size={select("Size", sizeOptions, "large")}
      creature={creature("Creature")}
    />
  ));
