import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SpellId } from "heroes-homm1";

import { spellOptions } from "../../stories";
import { SpellIcon } from "./SpellIcon";

storiesOf("base/SpellIcon", module)
  .add("default", () => (
    <SpellIcon
      spell={select("Spell", spellOptions, SpellId.Bless)}
      onClick={action("Click")}
    />
  ));
