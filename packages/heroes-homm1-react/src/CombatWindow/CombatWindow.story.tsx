import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment, HeroClass, TerrainType } from "heroes-homm1";

import { terrainTypeOptions as terrainTypeOptionsBase } from "../stories";
import { CombatWindow, CombatWindowProps } from "./CombatWindow";

const terrainOptions = {
  ...terrainTypeOptionsBase,
  Graveyard: "graveyard",
};

storiesOf(CombatWindow.name, module)
  .add("default", () => {
    const attacker: CombatWindowProps["attacker"] = {
      alignment: Alignment.Red,
      heroClass: HeroClass.Knight,
    };

    const terrain: CombatWindowProps["terrain"] = {
      type: select("Terrain Type", terrainOptions, TerrainType.Water),
      woody: boolean("Woody Terrain", false),
    };

    return (
      <CombatWindow
        visible={boolean("Visible", true)}
        attacker={attacker}
        terrain={terrain}
      />
    );
  });
