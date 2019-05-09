import { Dwelling, enoughResources, Resources, Structure } from "heroes-core";

import { CastleOptionStatus } from "./CastleOptionStatus";
import { CreatureId } from "./creatures";
import { Resource } from "./Resource";
import { SpellId } from "./spells";

interface DwellingType {
  readonly creature: string;
  readonly growth: number;
  readonly cost: Resources;
}

const constructDwelling = (dwellingType: DwellingType): Dwelling => ({
  availableCount: 0,
  cost: dwellingType.cost,
  creature: dwellingType.creature,
  growth: dwellingType.growth,
});

export interface StructureType<TData = {}> {
  readonly id: string;
  readonly cost: Resources;
  readonly dwelling?: DwellingType;
  readonly data?: TData;
}

export const constructStructure = (structureType: StructureType): Structure => ({
  cost: structureType.cost,
  data: structureType.data || {},
  dwelling: structureType.dwelling ?
    constructDwelling(structureType.dwelling) :
    undefined,
  id: structureType.id,
  isBuilt: false,
});

export const getCastleOptionStatus = (
  structure: Structure,
  canConstructStructures: boolean,
  resources: Resources,
): CastleOptionStatus => {
  let status = CastleOptionStatus.Available;

  if (structure.isBuilt) {
    status = CastleOptionStatus.Built;
  } else if (!canConstructStructures) {
    status = CastleOptionStatus.Unavailable;
  } else if (!enoughResources(resources, structure.cost)) {
    status = CastleOptionStatus.Unaffordable;
  }

  return status;
};

export enum StructureId {
  Castle = "castle",

  // Common Structures
  ThievesGuild = "thieves-guild",
  Tavern = "tavern",
  Well = "well",
  MageGuild = "mage-guild",
  Shipyard = "shipyard",
}

interface MageGuildData {
  readonly spells: string[];
  readonly spellBookCost: Resources;
}

export interface MageGuild extends Structure<MageGuildData> {
  readonly id: StructureId.MageGuild;
}

interface ShipyardData {
  readonly shipCost: Resources;
}

export interface Shipyard extends Structure {
  readonly id: StructureId.Shipyard;
  readonly data: ShipyardData;
}

export const coreStructures: StructureType[] = [
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
  CommonStructures.includes(structure);

export const commonStructures: StructureType[] = [
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 5,
      [Resource.Ore]: 5,
    },
    data: {
      spellBookCost: {
        [Resource.Gold]: 500,
      },
      spells: [
        SpellId.Bless,
        SpellId.Protection,
        SpellId.ViewResources,
        SpellId.Haste,
        SpellId.SummonBoat,
        SpellId.ViewHeroes,
        SpellId.Fireball,
        SpellId.MeteorShower,
        SpellId.ViewAll,
      ],
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
    data: {
      shipCost: {
        [Resource.Gold]: 1000,
        [Resource.Wood]: 10,
      },
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
    dwelling: {
      cost: {
        [Resource.Gold]: 20,
      },
      creature: CreatureId.Peasant,
      growth: 12,
    },
    id: FarmStructureId.ThatchedHut,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 150,
      },
      creature: CreatureId.Archer,
      growth: 8,
    },
    id: FarmStructureId.ArcheryRange,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 5,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 200,
      },
      creature: CreatureId.Pikeman,
      growth: 5,
    },
    id: FarmStructureId.Blacksmith,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 250,
      },
      creature: CreatureId.Swordsman,
      growth: 4,
    },
    id: FarmStructureId.Armory,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Wood]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 300,
      },
      creature: CreatureId.Cavalry,
      growth: 3,
    },
    id: FarmStructureId.JoustingArena,
  },
  {
    cost: {
      [Resource.Gold]: 5000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 600,
      },
      creature: CreatureId.Paladin,
      growth: 2,
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
    dwelling: {
      cost: {
        [Resource.Gold]: 40,
      },
      creature: CreatureId.Goblin,
      growth: 10,
    },
    id: PlainsStructureId.Hut,
  },
  {
    cost: {
      [Resource.Gold]: 800,
      [Resource.Wood]: 5,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 140,
      },
      creature: CreatureId.Orc,
      growth: 8,
    },
    id: PlainsStructureId.StickHut,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 200,
      },
      creature: CreatureId.Wolf,
      growth: 5,
    },
    id: PlainsStructureId.Den,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
      [Resource.Wood]: 10,
      [Resource.Ore]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 300,
      },
      creature: CreatureId.Ogre,
      growth: 4,
    },
    id: PlainsStructureId.Adobe,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Ore]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 600,
      },
      creature: CreatureId.Troll,
      growth: 3,
    },
    id: PlainsStructureId.Bridge,
  },
  {
    cost: {
      [Resource.Gold]: 6000,
      [Resource.Ore]: 20,
      [Resource.Crystal]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 750,
      },
      creature: CreatureId.Cyclops,
      growth: 2,
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
    dwelling: {
      cost: {
        [Resource.Gold]: 50,
      },
      creature: CreatureId.Sprite,
      growth: 8,
    },
    id: ForestStructureId.Treehouse,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Wood]: 5,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 200,
      },
      creature: CreatureId.Dwarf,
      growth: 6,
    },
    id: ForestStructureId.Cottage,
  },
  {
    cost: {
      [Resource.Gold]: 1500,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 250,
      },
      creature: CreatureId.Elf,
      growth: 4,
    },
    id: ForestStructureId.ArcheryRange,
  },
  {
    cost: {
      [Resource.Gold]: 2500,
      [Resource.Ore]: 10,
      [Resource.Mercury]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 350,
      },
      creature: CreatureId.Druid,
      growth: 3,
    },
    id: ForestStructureId.Stonehenge,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Wood]: 10,
      [Resource.Gems]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 500,
      },
      creature: CreatureId.Unicorn,
      growth: 2,
    },
    id: ForestStructureId.FencedMeadow,
  },
  {
    cost: {
      [Resource.Gold]: 10000,
      [Resource.Ore]: 30,
      [Resource.Mercury]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 1500,
        [Resource.Mercury]: 1,

      },
      creature: CreatureId.Phoenix,
      growth: 1,
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
    dwelling: {
      cost: {
        [Resource.Gold]: 60,
      },
      creature: CreatureId.Centaur,
      growth: 8,
    },
    id: MountainsStructureId.Cave,
  },
  {
    cost: {
      [Resource.Gold]: 1000,
      [Resource.Ore]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 200,
      },
      creature: CreatureId.Gargoyle,
      growth: 6,
    },
    id: MountainsStructureId.Crypt,
  },
  {
    cost: {
      [Resource.Gold]: 2000,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 300,
      },
      creature: CreatureId.Griffin,
      growth: 4,
    },
    id: MountainsStructureId.Nest,
  },
  {
    cost: {
      [Resource.Gold]: 3000,
      [Resource.Gems]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 400,
      },
      creature: CreatureId.Minotaur,
      growth: 3,
    },
    id: MountainsStructureId.Maze,
  },
  {
    cost: {
      [Resource.Gold]: 4000,
      [Resource.Sulfur]: 10,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 800,
      },
      creature: CreatureId.Hydra,
      growth: 2,
    },
    id: MountainsStructureId.Swamp,
  },
  {
    cost: {
      [Resource.Gold]: 15000,
      [Resource.Ore]: 30,
      [Resource.Sulfur]: 20,
    },
    dwelling: {
      cost: {
        [Resource.Gold]: 3000,
        [Resource.Sulfur]: 1,
      },
      creature: CreatureId.Dragon,
      growth: 1,
    },
    id: MountainsStructureId.BlackTower,
  },
];
