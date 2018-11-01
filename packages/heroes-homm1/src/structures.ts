import { Resources } from "heroes-core";

import { Resource } from "./Resource";

interface StructureType {
  id: string;
  cost: Resources;
}

export enum StructureId {
  Tent = "tent",
  Castle = "castle",

  // Common Structures
  MageGuild = "mage-guild",
  ThievesGuild = "thieves-guild",
  Tavern = "tavern",
  Shipyard = "shipyard",
  Well = "well",
}

export const coreStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 10000,
      [Resource.Wood]: 20,
      [Resource.Ore]: 20,
    },
    id: StructureId.Tent,
  },
  {
    cost: {
      [Resource.Gold]: 10000,
      [Resource.Wood]: 20,
      [Resource.Ore]: 20,
    },
    id: StructureId.Castle,
  },
];

const CommonStructures: string[] = [
  StructureId.MageGuild,
  StructureId.ThievesGuild,
  StructureId.Tavern,
  StructureId.Shipyard,
  StructureId.Well,
];

export const isCommonStructure = (structure: string) =>
  CommonStructures.indexOf(structure) !== -1;

export const commonStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 5,
      [Resource.Ore]: 5,
    },
    id: StructureId.MageGuild,
  },
  {
    cost: {
      [Resource.Gold]: 750,
      [Resource.Wood]: 5,
    },
    id: StructureId.ThievesGuild,
  },
  {
    cost: {
      [Resource.Gold]: 500,
      [Resource.Wood]: 5,
    },
    id: StructureId.Tavern,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 20,
    },
    id: StructureId.Shipyard,
  },
  {
    cost: {
      [Resource.Gold]: 500,
    },
    id: StructureId.Well,
  },
];

// Farm Structures
export enum FarmStructureId {
  ThatchedHut = "thatched-hut",
  ArcheryRange = "archery-range",
  Blacksmith = "blacksmith",
  Armory = "armory",
  JoustingArena = "jousting-arena",
  Cathedral = "cathedral",
}

export const farmStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 200,
    },
    id: FarmStructureId.ThatchedHut,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    id: FarmStructureId.ArcheryRange,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 5,
    },
    id: FarmStructureId.Blacksmith,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    id: FarmStructureId.Armory,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Wood]: 20,
    },
    id: FarmStructureId.JoustingArena,
  },
  {
    cost: {
      [Resource.Gold]: 5000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    id: FarmStructureId.Cathedral,
  },
];

// Plains Structures
export enum PlainsStructureId {
  Hut = "hut",
  StickHut = "stick-hut",
  Den = "den",
  Adobe = "adobe",
  Bridge = "bridge",
  Pyramid = "pyramid",
}

export const plainsStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 300,
    },
    id: PlainsStructureId.Hut,
  },
  {
    cost: {
      [Resource.Gold]: 800,
      [Resource.Wood]: 5,
    },
    id: PlainsStructureId.StickHut,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    id: PlainsStructureId.Den,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    id: PlainsStructureId.Adobe,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Ore]: 20,
    },
    id: PlainsStructureId.Bridge,
  },
  {
    cost: {
      [Resource.Gold]: 6000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    id: PlainsStructureId.Pyramid,
  },
];

// Forest Structures
export enum ForestStructureId {
  Treehouse = "treehouse",
  Cottage = "cottage",
  ArcheryRange = "archery-range",
  Stonehenge = "stonehenge",
  FencedMeadow = "fenced-meadow",
  RedTower = "red-tower",
}

export const forestStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 500,
      [Resource.Wood]: 5,
    },
    id: ForestStructureId.Treehouse,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 5,
    },
    id: ForestStructureId.Cottage,
  },
  {
    cost: {
      [Resource.Gold]: 1500,
    },
    id: ForestStructureId.ArcheryRange,
  },
  {
    cost: {
      [Resource.Gold]: 2500,
      [Resource.Ore]: 10,
      [Resource.Mercury]: 10,
    },
    id: ForestStructureId.Stonehenge,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Wood]: 10,
      [Resource.Gems]: 10,
    },
    id: ForestStructureId.FencedMeadow,
  },
  {
    cost: {
      [Resource.Gold]: 10000,
      [Resource.Ore]: 30,
      [Resource.Mercury]: 20,
    },
    id: ForestStructureId.RedTower,
  },
];

// Mountains Structures
export enum MountainsStructureId {
  Cave = "cave",
  Crypt = "crypt",
  Nest = "nest",
  Maze = "maze",
  Swamp = "swamp",
  BlackTower = "black-tower",
}

export const mountainsStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 500,
    },
    id: MountainsStructureId.Cave,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 10,
    },
    id: MountainsStructureId.Crypt,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
    },
    id: MountainsStructureId.Nest,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Gems]: 10,
    },
    id: MountainsStructureId.Maze,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Sulfur]: 10,
    },
    id: MountainsStructureId.Swamp,
  },
  {
    cost: {
      [Resource.Gold]: 15000,
      [Resource.Ore]: 30,
      [Resource.Sulfur]: 20,
    },
    id: MountainsStructureId.BlackTower,
  },
];
