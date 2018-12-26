import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CombatWindow } from "../CombatWindow";
import { CombatBar } from "./CombatBar";

storiesOf(`${CombatWindow.name}/${CombatBar.name}`, module)
  .add("default", () => (
    <CombatBar
      statusText={text("Status Text", "Content")}
      onAutoClick={action("Auto Click")}
      onSkipClick={action("Skip Click")}
    />
  ));
