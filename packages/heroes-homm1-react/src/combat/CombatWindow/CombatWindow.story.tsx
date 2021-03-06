import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Battlefield, BattlefieldObjectType, CombatSide, createBattlefield } from "heroes-core";
import {
  BattlefieldHeigth,
  BattlefieldWidth,
  CreatureId,
  HeroClassId,
  HeroId,
  PlayerColorId,
  TerrainVariants,
} from "heroes-homm1";

import { combatSide, terrain } from "../../stories";
import { CombatWindow, CombatWindowProps } from "./CombatWindow";

storiesOf("combat|CombatWindow", module)
  .add("default", () => {
    const attacker: CombatWindowProps["attacker"] = {
      hero: {
        heroClass: HeroClassId.Knight,
        id: HeroId.LordKilburn,
        luck: 0,
        morale: 0,
        playerColor: PlayerColorId.Red,
        skills: {},
      },
    };

    const defender: CombatWindowProps["defender"] = {
      hero: {
        heroClass: HeroClassId.Barbarian,
        id: HeroId.LordHaart,
        luck: 0,
        morale: 0,
        playerColor: PlayerColorId.Green,
        skills: {},
      },
    };

    const battlefieldBase = createBattlefield(
      BattlefieldWidth,
      BattlefieldHeigth,
      terrain("Terrain"),
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

    const visibleHeroCombatOptions = boolean("Hero Combat Options Visible?", false) ?
      combatSide("Visible Hero Combat Options") :
      undefined;

    return (
      <CombatWindow
        visible={boolean("Visible", true)}
        attacker={attacker}
        defender={defender}
        battlefield={battlefield}
        visibleHeroCombatOptions={visibleHeroCombatOptions}
        onVisibleHeroCombatOptionsChange={action("Visible Hero Combat Options Change")}
      />
    );
  });
