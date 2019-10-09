import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TownLimit } from "heroes-homm1";

import Readme = require("./README.md");

import { town } from "../stories";
import { TownLocator } from "./TownLocator";

storiesOf("TownLocator", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <TownLocator
      index={number("Index", 0, { range: true, min: 0, max: TownLimit - 1, step: 1 })}
      town={town("Town")}
      isCastleBuilt={boolean("Is Castle Built", false)}
      selected={boolean("Selected", false)}
      onClick={action("Click")}
    />
  ));
