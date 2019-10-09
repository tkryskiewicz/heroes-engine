import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import Readme = require("./README.md");

import { CombatBar } from "./CombatBar";

storiesOf("combat|CombatWindow/CombatBar", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <CombatBar
      statusText={text("Status Text", "Content")}
      onAutoClick={action("Auto Click")}
      onSkipClick={action("Skip Click")}
    />
  ));
