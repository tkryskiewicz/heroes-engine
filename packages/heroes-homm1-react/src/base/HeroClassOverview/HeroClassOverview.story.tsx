import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { HeroLimit } from "heroes-homm1";

import { heroClass } from "../../stories";
import { HeroClassOverview } from "./HeroClassOverview";

storiesOf("base|HeroClassOverview", module)
  .add("default", () => (
    <HeroClassOverview
      heroClass={heroClass("Hero Class")}
      count={number("Count", 0, { range: true, min: 0, max: HeroLimit, step: 1 })}
    />
  ));
