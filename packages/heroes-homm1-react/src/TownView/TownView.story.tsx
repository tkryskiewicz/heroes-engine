import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  FarmStructureId,
  ForestStructureId,
  MountainsStructureId,
  PlainsStructureId,
  StructureId,
  TownId,
} from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

const commonStructures = [
  {
    id: StructureId.MageGuild,
    isBuilt: true,
  },
  {
    id: StructureId.ThievesGuild,
    isBuilt: true,
  },
  {
    id: StructureId.Tavern,
    isBuilt: true,
  },
  {
    id: StructureId.Shipyard,
    isBuilt: true,
  },
  {
    id: StructureId.Well,
    isBuilt: true,
  },
];

const farmStructures = [
  {
    id: FarmStructureId.ThatchedHut,
    isBuilt: true,
  },
  {
    id: FarmStructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    id: FarmStructureId.Blacksmith,
    isBuilt: true,
  },
  {
    id: FarmStructureId.Armory,
    isBuilt: true,
  },
  {
    id: FarmStructureId.JoustingArena,
    isBuilt: true,
  },
  {
    id: FarmStructureId.Cathedral,
    isBuilt: true,
  },
];

const plainsStructures = [
  {
    id: PlainsStructureId.Hut,
    isBuilt: true,
  },
  {
    id: PlainsStructureId.StickHut,
    isBuilt: true,
  },
  {
    id: PlainsStructureId.Den,
    isBuilt: true,
  },
  {
    id: PlainsStructureId.Adobe,
    isBuilt: true,
  },
  {
    id: PlainsStructureId.Bridge,
    isBuilt: true,
  },
  {
    id: PlainsStructureId.Pyramid,
    isBuilt: true,
  },
];

const forestStructures = [
  {
    id: ForestStructureId.Treehouse,
    isBuilt: true,
  },
  {
    id: ForestStructureId.Cottage,
    isBuilt: true,
  },
  {
    id: ForestStructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    id: ForestStructureId.Stonehenge,
    isBuilt: true,
  },
  {
    id: ForestStructureId.FencedMeadow,
    isBuilt: true,
  },
  {
    id: ForestStructureId.RedTower,
    isBuilt: true,
  },
];

const mountainsStructures = [
  {
    id: MountainsStructureId.Cave,
    isBuilt: true,
  },
  {
    id: MountainsStructureId.Crypt,
    isBuilt: true,
  },
  {
    id: MountainsStructureId.Nest,
    isBuilt: true,
  },
  {
    id: MountainsStructureId.Maze,
    isBuilt: true,
  },
  {
    id: MountainsStructureId.Swamp,
    isBuilt: true,
  },
  {
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
      />
    );
  });
