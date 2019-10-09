import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { spell } from "../../stories";
import { SpellScroll } from "./SpellScroll";

storiesOf("MageGuildWindow/SpellScroll", module)
  .add("default", () => (
    <SpellScroll
      spell={spell("Spell")}
      unfolded={boolean("Unfolded", false)}
      onClick={action("Click")}
    />
  ));
