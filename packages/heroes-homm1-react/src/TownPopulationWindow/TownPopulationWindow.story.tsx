import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreatureId, FarmStructureId, TownId } from "heroes-homm1";

import { TownPopulationWindow, TownPopulationWindowProps } from "./TownPopulationWindow";

const dwellings: TownPopulationWindowProps["dwellings"] = [
  {
    available: 12,
    creature: CreatureId.Peasant,
    growthRate: 14,
    id: FarmStructureId.ThatchedHut,
  },
  {
    available: 8,
    creature: CreatureId.Archer,
    growthRate: 10,
    id: FarmStructureId.ArcheryRange,
  },
  {
    available: 5,
    creature: CreatureId.Pikeman,
    growthRate: 7,
    id: FarmStructureId.Blacksmith,
  },
  {
    available: 4,
    creature: CreatureId.Swordsman,
    growthRate: 6,
    id: FarmStructureId.Armory,
  },
  {
    creature: CreatureId.Cavalry,
    id: FarmStructureId.JoustingArena,
  },
  {
    creature: CreatureId.Paladin,
    id: FarmStructureId.Cathedral,
  },
];

storiesOf("TownPopulationWindow", module)
  .add("default", () => (
    <TownPopulationWindow
      visible={boolean("Visible", true)}
      town={TownId.Farm}
      dwellings={dwellings}
      onExitClick={action("Exit Click")}
    />
  ));
