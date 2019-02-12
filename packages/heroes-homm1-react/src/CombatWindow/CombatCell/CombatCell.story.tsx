import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { terrainType } from "../../stories";
import { CombatCell } from "./CombatCell";

storiesOf("CombatWindow/CombatCell", module)
  .add("default", () => (
    <CombatCell
      index={number("Index", 0, { range: true, min: 0, max: 50, step: 1 })}
      terrainType={terrainType("Terrain Type")}
      terrainVariant={number("Terrain Variant", 0, { range: true, min: 0, max: 6, step: 1 })}
    />
  ));
