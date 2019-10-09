import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { alignments } from "heroes-homm1";

import { ThievesGuildWindow } from "./ThievesGuildWindow";

storiesOf("ThievesGuildWindow", module)
  .add("default", () => (
    <ThievesGuildWindow
      visible={boolean("Visible", true)}
      townCount={[alignments]}
      castleCount={[...alignments.map((a) => [a])]}
      heroCount={[]}
      gold={[]}
      primaryResources={[]}
      secondaryResources={[]}
      foundObelisksCount={[]}
      armyStrength={[]}
      onExitClick={action("Exit Click")}
    />
  ));
