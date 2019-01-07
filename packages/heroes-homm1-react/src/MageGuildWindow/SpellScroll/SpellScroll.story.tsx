import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SpellId } from "heroes-homm1";

import { spellOptions } from "../../stories";
import { SpellScroll } from "./SpellScroll";

storiesOf("MageGuildWindow/SpellScroll", module)
  .add("default", () => (
    <SpellScroll
      spell={select("Spell", spellOptions, SpellId.Bless)}
      unfolded={boolean("Unfolded", false)}
      onClick={action("Click")}
    />
  ));
