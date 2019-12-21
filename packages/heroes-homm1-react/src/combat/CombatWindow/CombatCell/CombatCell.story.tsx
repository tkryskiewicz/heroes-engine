import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { terrain } from "../../../stories";
import { CombatCell } from "./CombatCell";

storiesOf("combat|CombatWindow/CombatCell", module)
  .add("default", () => (
    <CombatCell
      index={number("Index", 0, { range: true, min: 0, max: 50, step: 1 })}
      terrainType={terrain("Terrain")}
      terrainVariant={number("Terrain Variant", 0, { range: true, min: 0, max: 6, step: 1 })}
      onClick={action("Click")}
    />
  ));
