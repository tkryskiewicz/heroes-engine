import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { SpellBookWindow } from "./SpellBookWindow";

storiesOf("SpellBookWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <SpellBookWindow
      visible={boolean("Visible", true)}
      onCombatSpellsClick={action("Combat Spells Click")}
      onAdventureSpellsClick={action("Adventure Spells Click")}
      onExitClick={action("Exit Click")}
    />
  ));
