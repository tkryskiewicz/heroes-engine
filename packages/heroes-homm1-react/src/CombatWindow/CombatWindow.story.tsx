import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment, HeroClass, HeroId, TerrainType } from "heroes-homm1";

import { combatSideOptions as combatSideOptionsBase, terrainTypeOptions as terrainTypeOptionsBase } from "../stories";
import { CombatWindow, CombatWindowProps } from "./CombatWindow";

const terrainOptions = {
  ...terrainTypeOptionsBase,
  Graveyard: "graveyard",
};

const combatSideOptions = {
  None: "",
  ...combatSideOptionsBase,
};

storiesOf(CombatWindow.name, module)
  .add("default", () => {
    const attacker: CombatWindowProps["attacker"] = {
      hero: {
        alignment: Alignment.Red,
        heroClass: HeroClass.Knight,
        id: HeroId.LordKilburn,
        luck: 0,
        morale: 0,
        skills: {},
      },
    };

    const defender: CombatWindowProps["defender"] = {
      hero: {
        alignment: Alignment.Green,
        heroClass: HeroClass.Barbarian,
        id: HeroId.LordHaart,
        luck: 0,
        morale: 0,
        skills: {},
      },
    };

    const terrain: CombatWindowProps["terrain"] = {
      type: select("Terrain Type", terrainOptions, TerrainType.Water),
      woody: boolean("Woody Terrain", false),
    };

    return (
      <CombatWindow
        visible={boolean("Visible", true)}
        attacker={attacker}
        defender={defender}
        terrain={terrain}
        visibleHeroCombatOptions={select("Visible Hero Combat Options", combatSideOptions, "" as any)}
        onVisibleHeroCombatOptionsChange={action("Visible Hero Combat Options Change")}
      />
    );
  });
