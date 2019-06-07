import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { spell } from "../../stories";
import { SpellIcon } from "./SpellIcon";

storiesOf("base|SpellIcon", module)
  .add("default", () => (
    <SpellIcon
      spell={spell("Spell")}
      onClick={action("Click")}
    />
  ));
