import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { creature } from "../../stories";
import { CreatureIcon, CreatureIconProps } from "./CreatureIcon";

const sizeOptions: CreatureIconProps["size"][] = [
  "large",
  "medium",
  "small",
  "tiny",
];

storiesOf("base|CreatureIcon", module)
  .add("default", () => (
    <CreatureIcon
      size={select("Size", sizeOptions, "large")}
      creature={creature("Creature")}
    />
  ));
