import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroClass, HeroLimit } from "heroes-homm1";

import { heroClassOptions } from "../../stories";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { HeroClassOverview } from "./HeroClassOverview";

storiesOf(`${KingdomOverviewWindow.name}/${HeroClassOverview.name}`, module)
  .add("default", () => (
    <HeroClassOverview
      heroClass={select("Hero Class", heroClassOptions, HeroClass.Knight)}
      count={number("Count", 0, { range: true, min: 0, max: HeroLimit, step: 1 })}
    />
  ));
