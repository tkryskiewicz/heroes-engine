import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { ThievesGuildWindow } from "./ThievesGuildWindow";

storiesOf("ThievesGuildWindow", module)
  .add("default", () => (
    <ThievesGuildWindow
      visible={boolean("Visible", true)}
      townCount={[[Alignment.Red, Alignment.Green, Alignment.Blue, Alignment.Yellow]]}
      castleCount={[[Alignment.Red], [Alignment.Green], [Alignment.Blue], [Alignment.Yellow]]}
      heroCount={[]}
      gold={[]}
      primaryResources={[]}
      secondaryResources={[]}
      foundObelisksCount={[]}
      armyStrength={[]}
      onExitClick={action("Exit Click")}
    />
  ));
