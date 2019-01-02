import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { HeroId, HeroLimit, MaxMobility } from "heroes-homm1";

import Readme = require("./README.md");

import { heroOptions } from "../stories";
import { HeroLocator } from "./HeroLocator";

storiesOf(HeroLocator.name, module)
  .addDecorator(withReadme(Readme))
  .add("default", () => {
    const hero = {
      id: select("Hero", heroOptions, HeroId.LordKilburn),
      mobility: number("Mobility", MaxMobility, { range: true, min: 0, max: MaxMobility, step: 1 }),
    };

    return (
      <HeroLocator
        index={number("Index", 0, { range: true, min: 0, max: HeroLimit - 1, step: 1 })}
        hero={hero}
        selected={boolean("Selected", false)}
        onClick={action("Click")}
      />
    );
  });
