import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { AdventureOptions } from "./AdventureOptions";

storiesOf(AdventureOptions.name, module)
  .add("default", () => (
    <AdventureOptions
      onViewWorldClick={action("View World Click")}
      onViewPuzzleClick={action("View Puzzle Click")}
      onCastSpellClick={action("Cast Spell Click")}
      onDigClick={action("Dig Click")}
      onOkayClick={action("Okay Click")}
    />
  ));