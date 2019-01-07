import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { CombatBar } from "./CombatBar";

storiesOf("CombatWindow/CombatBar", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <CombatBar
      statusText={text("Status Text", "Content")}
      onAutoClick={action("Auto Click")}
      onSkipClick={action("Skip Click")}
    />
  ));
