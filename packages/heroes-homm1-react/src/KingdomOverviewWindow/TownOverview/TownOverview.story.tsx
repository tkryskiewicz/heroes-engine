import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownId, TownLimit } from "heroes-homm1";

import { townOptions } from "../../stories";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { TownOverview } from "./TownOverview";

storiesOf(`${KingdomOverviewWindow.name}/${TownOverview.name}`, module)
  .add("default", () => (
    <TownOverview
      town={select("Town", townOptions, TownId.Farm)}
      isCastleBuilt={boolean("Is Castle Built", false)}
      count={number("Count", 0, { range: true, min: 0, max: TownLimit, step: 1 })}
    />
  ));
