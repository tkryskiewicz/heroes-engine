import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId } from "heroes-homm1";

import { creatureOptions } from "../stories";
import { CreatureIcon, CreatureIconProps } from "./CreatureIcon";

const sizeOptions: { [s: string]: CreatureIconProps["size"] } = {
  Large: "large",
  Medium: "medium",
  Small: "small",
  Tiny: "tiny",
};

storiesOf(CreatureIcon.name, module)
  .add("default", () => (
    <CreatureIcon
      size={select("Size", sizeOptions, "large")}
      creature={select("Creature", creatureOptions, CreatureId.Peasant)}
    />
  ));
