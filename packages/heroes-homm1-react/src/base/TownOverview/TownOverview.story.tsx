import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TownLimit } from "heroes-homm1";

import { town } from "../../stories";
import { TownOverview } from "./TownOverview";

storiesOf("base|TownOverview", module)
  .add("default", () => (
    <TownOverview
      town={town("Town")}
      isCastleBuilt={boolean("Is Castle Built", false)}
      count={number("Count", 0, { range: true, min: 0, max: TownLimit, step: 1 })}
    />
  ));
