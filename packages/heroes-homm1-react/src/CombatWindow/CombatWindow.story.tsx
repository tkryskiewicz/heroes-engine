import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Battlefield, BattlefieldObjectType, CombatSide, createBattlefield } from "heroes-core";
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

    const battlefieldBase = createBattlefield(
      BattlefieldWidth,
      BattlefieldHeigth,
      select("Terrain Type", terrainOptions, TerrainType.Water),
      boolean("Woody Terrain", false),
      TerrainVariants,
    );

    const battlefield: Battlefield = {
      ...battlefieldBase,
      // tslint:disable-next-line:prefer-object-spread
      cells: Object.assign([
        ...battlefieldBase.cells,
      ], {
          0: {
            ...battlefieldBase.cells[0],
            object: {
              side: CombatSide.Attacker,
              troop: {
                count: 1,
                creature: CreatureId.Peasant,
              },
              type: BattlefieldObjectType.Troop,
            },
          },
          3: {
            ...battlefieldBase.cells[3],
            object: {
              type: BattlefieldObjectType.Obstacle,
              variant: 0,
            },
          },
          6: {
            ...battlefieldBase.cells[6],
            object: {
              side: CombatSide.Defender,
              troop: {
                count: 1,
                creature: CreatureId.Archer,
              },
              type: BattlefieldObjectType.Troop,
            },
          },
          20: {
            ...battlefieldBase.cells[20],
            object: {
              type: BattlefieldObjectType.Obstacle,
              variant: 1,
            },
          },
        }),
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
