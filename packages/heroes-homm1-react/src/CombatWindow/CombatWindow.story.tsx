import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  Alignment,
  BattlefieldHeigth,
  BattlefieldWidth,
  CreatureId,
  HeroClass,
  HeroId,
  TerrainType,
  TerrainVariants,
} from "heroes-homm1";

import { BattlefieldObjectType, CombatSide, createBattlefield } from "heroes-core";
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

storiesOf("CombatWindow", module)
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

    const battlefield = createBattlefield(
      BattlefieldWidth,
      BattlefieldHeigth,
      select("Terrain Type", terrainOptions, TerrainType.Water),
      boolean("Woody Terrain", false),
      TerrainVariants,
    );

    battlefield.cells[3].object = {
      type: BattlefieldObjectType.Obstacle,
      variant: 0,
    };
    battlefield.cells[20].object = {
      type: BattlefieldObjectType.Obstacle,
      variant: 1,
    };
    battlefield.cells[30].object = {
      type: BattlefieldObjectType.Obstacle,
      variant: 2,
    };

    battlefield.cells[0].object = {
      side: CombatSide.Attacker,
      troop: {
        count: 1,
        creature: CreatureId.Peasant,
      },
      type: BattlefieldObjectType.Troop,
    };

    battlefield.cells[6].object = {
      side: CombatSide.Defender,
      troop: {
        count: 1,
        creature: CreatureId.Archer,
      },
      type: BattlefieldObjectType.Troop,
    };

    return (
      <CombatWindow
        visible={boolean("Visible", true)}
        attacker={attacker}
        defender={defender}
        battlefield={battlefield}
        visibleHeroCombatOptions={select("Visible Hero Combat Options", combatSideOptions, "" as any)}
        onVisibleHeroCombatOptionsChange={action("Visible Hero Combat Options Change")}
      />
    );
  });
