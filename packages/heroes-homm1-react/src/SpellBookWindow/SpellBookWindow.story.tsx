import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { SpellType } from "heroes-homm1";

import Readme = require("./README.md");

import { spellTypeOptions } from "../stories";
import { SpellBookWindow } from "./SpellBookWindow";

storiesOf("SpellBookWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <SpellBookWindow
      visible={boolean("Visible", true)}
      spellType={select("Spell Type", spellTypeOptions, SpellType.Combat)}
      onSpellTypeChange={action("Spell Type Change")}
      onExitClick={action("Exit Click")}
    />
  ));
