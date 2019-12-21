import { Dwelling, enoughResources, Resources, Structure, StructureData } from "heroes-core";

import { CastleOptionStatus } from "./CastleOptionStatus";
import { CreatureId, ResourceId, SpellId } from "./data";

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

declare module "heroes-core/src/Structure" {
  interface StructureData<TData> {
    readonly cost: Resources;
    readonly dwelling?: DwellingType;
  }
}

export const constructStructure = (structureType: StructureData): Structure => ({
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

export const coreStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 10000,
      [ResourceId.Wood]: 20,
      [ResourceId.Ore]: 20,
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

export const commonStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 2000,
      [ResourceId.Wood]: 5,
      [ResourceId.Ore]: 5,
    },
    data: {
      spellBookCost: {
        [ResourceId.Gold]: 500,
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
      [ResourceId.Gold]: 750,
      [ResourceId.Wood]: 5,
    },
    id: StructureId.ThievesGuild,
  },
  {
    cost: {
      [ResourceId.Gold]: 500,
      [ResourceId.Wood]: 5,
    },
    id: StructureId.Tavern,
  },
  {
    cost: {
      [ResourceId.Gold]: 2000,
      [ResourceId.Wood]: 20,
    },
    data: {
      shipCost: {
        [ResourceId.Gold]: 1000,
        [ResourceId.Wood]: 10,
      },
    },
    id: StructureId.Shipyard,
  },
  {
    cost: {
      [ResourceId.Gold]: 500,
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

export const farmStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 200,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 20,
      },
      creature: CreatureId.Peasant,
      growth: 12,
    },
    id: FarmStructureId.ThatchedHut,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 150,
      },
      creature: CreatureId.Archer,
      growth: 8,
    },
    id: FarmStructureId.ArcheryRange,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
      [ResourceId.Ore]: 5,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 200,
      },
      creature: CreatureId.Pikeman,
      growth: 5,
    },
    id: FarmStructureId.Blacksmith,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
      [ResourceId.Wood]: 10,
      [ResourceId.Ore]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 250,
      },
      creature: CreatureId.Swordsman,
      growth: 4,
    },
    id: FarmStructureId.Armory,
  },
  {
    cost: {
      [ResourceId.Gold]: 4000,
      [ResourceId.Wood]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 300,
      },
      creature: CreatureId.Cavalry,
      growth: 3,
    },
    id: FarmStructureId.JoustingArena,
  },
  {
    cost: {
      [ResourceId.Gold]: 5000,
      [ResourceId.Ore]: 20,
      [ResourceId.Crystal]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 600,
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

export const plainsStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 300,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 40,
      },
      creature: CreatureId.Goblin,
      growth: 10,
    },
    id: PlainsStructureId.Hut,
  },
  {
    cost: {
      [ResourceId.Gold]: 800,
      [ResourceId.Wood]: 5,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 140,
      },
      creature: CreatureId.Orc,
      growth: 8,
    },
    id: PlainsStructureId.StickHut,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 200,
      },
      creature: CreatureId.Wolf,
      growth: 5,
    },
    id: PlainsStructureId.Den,
  },
  {
    cost: {
      [ResourceId.Gold]: 2000,
      [ResourceId.Wood]: 10,
      [ResourceId.Ore]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 300,
      },
      creature: CreatureId.Ogre,
      growth: 4,
    },
    id: PlainsStructureId.Adobe,
  },
  {
    cost: {
      [ResourceId.Gold]: 3000,
      [ResourceId.Ore]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 600,
      },
      creature: CreatureId.Troll,
      growth: 3,
    },
    id: PlainsStructureId.Bridge,
  },
  {
    cost: {
      [ResourceId.Gold]: 6000,
      [ResourceId.Ore]: 20,
      [ResourceId.Crystal]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 750,
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

export const forestStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 500,
      [ResourceId.Wood]: 5,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 50,
      },
      creature: CreatureId.Sprite,
      growth: 8,
    },
    id: ForestStructureId.Treehouse,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
      [ResourceId.Wood]: 5,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 200,
      },
      creature: CreatureId.Dwarf,
      growth: 6,
    },
    id: ForestStructureId.Cottage,
  },
  {
    cost: {
      [ResourceId.Gold]: 1500,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 250,
      },
      creature: CreatureId.Elf,
      growth: 4,
    },
    id: ForestStructureId.ArcheryRange,
  },
  {
    cost: {
      [ResourceId.Gold]: 2500,
      [ResourceId.Ore]: 10,
      [ResourceId.Mercury]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 350,
      },
      creature: CreatureId.Druid,
      growth: 3,
    },
    id: ForestStructureId.Stonehenge,
  },
  {
    cost: {
      [ResourceId.Gold]: 3000,
      [ResourceId.Wood]: 10,
      [ResourceId.Gems]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 500,
      },
      creature: CreatureId.Unicorn,
      growth: 2,
    },
    id: ForestStructureId.FencedMeadow,
  },
  {
    cost: {
      [ResourceId.Gold]: 10000,
      [ResourceId.Ore]: 30,
      [ResourceId.Mercury]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 1500,
        [ResourceId.Mercury]: 1,

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

export const mountainsStructures: StructureData[] = [
  {
    cost: {
      [ResourceId.Gold]: 500,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 60,
      },
      creature: CreatureId.Centaur,
      growth: 8,
    },
    id: MountainsStructureId.Cave,
  },
  {
    cost: {
      [ResourceId.Gold]: 1000,
      [ResourceId.Ore]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 200,
      },
      creature: CreatureId.Gargoyle,
      growth: 6,
    },
    id: MountainsStructureId.Crypt,
  },
  {
    cost: {
      [ResourceId.Gold]: 2000,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 300,
      },
      creature: CreatureId.Griffin,
      growth: 4,
    },
    id: MountainsStructureId.Nest,
  },
  {
    cost: {
      [ResourceId.Gold]: 3000,
      [ResourceId.Gems]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 400,
      },
      creature: CreatureId.Minotaur,
      growth: 3,
    },
    id: MountainsStructureId.Maze,
  },
  {
    cost: {
      [ResourceId.Gold]: 4000,
      [ResourceId.Sulfur]: 10,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 800,
      },
      creature: CreatureId.Hydra,
      growth: 2,
    },
    id: MountainsStructureId.Swamp,
  },
  {
    cost: {
      [ResourceId.Gold]: 15000,
      [ResourceId.Ore]: 30,
      [ResourceId.Sulfur]: 20,
    },
    dwelling: {
      cost: {
        [ResourceId.Gold]: 3000,
        [ResourceId.Sulfur]: 1,
      },
      creature: CreatureId.Dragon,
      growth: 1,
    },
    id: MountainsStructureId.BlackTower,
  },
];
