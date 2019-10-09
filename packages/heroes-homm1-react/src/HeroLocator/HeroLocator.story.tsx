import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { HeroLimit, MaxMobility } from "heroes-homm1";

import Readme = require("./README.md");

import { hero } from "../stories";
import { HeroLocator } from "./HeroLocator";

storiesOf("HeroLocator", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => {
    const h = {
      id: hero("Hero"),
      mobility: number("Mobility", MaxMobility, { range: true, min: 0, max: MaxMobility, step: 1 }),
    };

    return (
      <HeroLocator
        index={number("Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
        hero={h}
        selected={boolean("Selected", false)}
        onClick={action("Click")}
      />
    );
  });
