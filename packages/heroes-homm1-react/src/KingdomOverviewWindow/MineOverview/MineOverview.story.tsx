import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Resource } from "heroes-homm1";

import { resourceOptions } from "../../stories";
import { MineOverview } from "./MineOverview";

storiesOf(`KingdomOverviewWindow/${MineOverview.name}`, module)
  .add("deafult", () => (
    <MineOverview
      resource={select("Resource", resourceOptions, Resource.Gold)}
      count={number("Count", 0, { range: true, min: 0, max: 99, step: 1 })}
    />
  ));
