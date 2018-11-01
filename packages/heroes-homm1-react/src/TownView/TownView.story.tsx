import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Structure } from "heroes-core";
import {
  FarmStructureId,
  ForestStructureId,
  MountainsStructureId,
  PlainsStructureId,
  Resource,
  StructureId,
  TownId,
} from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

const commonStructures: Structure[] = [
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 5,
      [Resource.Ore]: 5,
    },
    id: StructureId.MageGuild,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 750,
      [Resource.Wood]: 5,
    },
    id: StructureId.ThievesGuild,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 500,
      [Resource.Wood]: 5,
    },
    id: StructureId.Tavern,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 20,
    },
    id: StructureId.Shipyard,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 500,
    },
    id: StructureId.Well,
    isBuilt: true,
  },
];

const farmStructures: Structure[] = [
  {
    cost: {
      [Resource.Gold]: 200,
    },
    id: FarmStructureId.ThatchedHut,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    id: FarmStructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 5,
    },
    id: FarmStructureId.Blacksmith,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    id: FarmStructureId.Armory,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Wood]: 20,
    },
    id: FarmStructureId.JoustingArena,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 5000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    id: FarmStructureId.Cathedral,
    isBuilt: true,
  },
];

const plainsStructures: Structure[] = [
  {
    cost: {
      [Resource.Gold]: 300,
    },
    id: PlainsStructureId.Hut,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 800,
      [Resource.Wood]: 5,
    },
    id: PlainsStructureId.StickHut,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    id: PlainsStructureId.Den,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    id: PlainsStructureId.Adobe,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Ore]: 20,
    },
    id: PlainsStructureId.Bridge,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 6000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    id: PlainsStructureId.Pyramid,
    isBuilt: true,
  },
];

const forestStructures = [
  {
    cost: {
      [Resource.Gold]: 500,
      [Resource.Wood]: 5,
    },
    id: ForestStructureId.Treehouse,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 5,
    },
    id: ForestStructureId.Cottage,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1500,
    },
    id: ForestStructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 2500,
      [Resource.Ore]: 10,
      [Resource.Mercury]: 10,
    },
    id: ForestStructureId.Stonehenge,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Wood]: 10,
      [Resource.Gems]: 10,
    },
    id: ForestStructureId.FencedMeadow,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 10000,
      [Resource.Ore]: 30,
      [Resource.Mercury]: 20,
    },
    id: ForestStructureId.RedTower,
    isBuilt: true,
  },
];

const mountainsStructures: Structure[] = [
  {
    cost: {
      [Resource.Gold]: 500,
    },
    id: MountainsStructureId.Cave,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 10,
    },
    id: MountainsStructureId.Crypt,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
    },
    id: MountainsStructureId.Nest,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Gems]: 10,
    },
    id: MountainsStructureId.Maze,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Sulfur]: 10,
    },
    id: MountainsStructureId.Swamp,
    isBuilt: true,
  },
  {
    cost: {
      [Resource.Gold]: 15000,
      [Resource.Ore]: 30,
      [Resource.Sulfur]: 20,
    },
    id: MountainsStructureId.BlackTower,
    isBuilt: true,
  },
];

const structures = {
  [TownId.Farm]: farmStructures,
  [TownId.Plains]: plainsStructures,
  [TownId.Forest]: forestStructures,
  [TownId.Mountains]: mountainsStructures,
};

storiesOf(TownView.name, module)
  .add("default", () => {
    const townId = select("Town", townOptions, TownId.Farm);

    const town: TownViewProps["town"] = {
      id: townId,
      structures: [
        {
          cost: {
            [Resource.Gold]: 10000,
            [Resource.Wood]: 20,
            [Resource.Ore]: 20,
          },
          id: boolean("Is Castle Built", false) ? StructureId.Castle : StructureId.Tent,
          isBuilt: true,
        },
        ...commonStructures,
        ...structures[townId],
      ],
    };

    return (
      <TownView
        town={town}
        onStructureClick={action("Structure Click")}
      />
    );
  });
