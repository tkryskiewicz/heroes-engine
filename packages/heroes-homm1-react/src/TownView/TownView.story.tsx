import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StructureId, TownId } from "heroes-homm1";

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
    id: StructureId.ThatchedHut,
    isBuilt: true,
  },
  {
    id: StructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    id: StructureId.Blacksmith,
    isBuilt: true,
  },
  {
    id: StructureId.Armory,
    isBuilt: true,
  },
  {
    id: StructureId.JoustingArena,
    isBuilt: true,
  },
  {
    id: StructureId.Cathedral,
    isBuilt: true,
  },
];

const plainsStructures = [
  {
    id: StructureId.Hut,
    isBuilt: true,
  },
  {
    id: StructureId.StickHut,
    isBuilt: true,
  },
  {
    id: StructureId.Den,
    isBuilt: true,
  },
  {
    id: StructureId.Adobe,
    isBuilt: true,
  },
  {
    id: StructureId.Bridge,
    isBuilt: true,
  },
  {
    id: StructureId.Pyramid,
    isBuilt: true,
  },
];

const forestStructures = [
  {
    id: StructureId.Treehouse,
    isBuilt: true,
  },
  {
    id: StructureId.Cottage,
    isBuilt: true,
  },
  {
    id: StructureId.ArcheryRange,
    isBuilt: true,
  },
  {
    id: StructureId.Stonehenge,
    isBuilt: true,
  },
  {
    id: StructureId.FencedMeadow,
    isBuilt: true,
  },
  {
    id: StructureId.RedTower,
    isBuilt: true,
  },
];

const mountainsStructures = [
  {
    id: StructureId.Cave,
    isBuilt: true,
  },
  {
    id: StructureId.Crypt,
    isBuilt: true,
  },
  {
    id: StructureId.Nest,
    isBuilt: true,
  },
  {
    id: StructureId.Maze,
    isBuilt: true,
  },
  {
    id: StructureId.Swamp,
    isBuilt: true,
  },
  {
    id: StructureId.BlackTower,
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
