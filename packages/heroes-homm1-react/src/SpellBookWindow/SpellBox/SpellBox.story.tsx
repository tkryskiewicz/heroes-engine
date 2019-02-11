import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { spell } from "../../stories";
import { SpellBox } from "./SpellBox";

storiesOf("SpellBookWindow/SpellBox", module)
  .add("default", () => (
    <SpellBox
      spell={spell("Spell")}
      charges={number("Charges", 0, { range: true, min: 0, max: 10, step: 1 })}
      onClick={action("Click")}
    />
  ));
