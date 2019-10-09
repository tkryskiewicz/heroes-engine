import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Readme = require("./README.md");

import { AdventureOptions } from "./AdventureOptions";

storiesOf("AdventureOptions", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <AdventureOptions
      visible={boolean("Visible", true)}
      onViewWorldClick={action("View World Click")}
      onViewPuzzleClick={action("View Puzzle Click")}
      onCastSpellClick={action("Cast Spell Click")}
      onDigClick={action("Dig Click")}
      onOkayClick={action("Okay Click")}
    />
  ));
