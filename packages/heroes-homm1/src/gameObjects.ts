import {
  CreatureObjectData,
  DwellingObjectData,
  GameObjectData,
  InteractionLimitType,
  MapObjectData,
  MobilityModifierObjectData,
  OwnableObjectData,
  PickableObjectData,
  TreasureObjectData,
} from "heroes-core";

import { CreatureId, creatures } from "./creatures";
import { artifactObjects, ObjectType, randomArtifactObject } from "./data";
import { ObjectId } from "./ObjectId";
import {
  CategorisedObjectData,
  HeroObjectData,
  MineObjectData,
  ObeliskObjectData,
  RandomCreatureObjectData,
  ResourceObjectData,
  TerrainRestrictedObjectData,
  TownObjectData,
  VariantObjectData,
} from "./objects";
import { ResourceId } from "./ResourceId";
import { TerrainType } from "./TerrainType";

const allTerrains = Object.values(TerrainType);
const nonWaterTerrains = Object.values(TerrainType).filter((t) => t !== TerrainType.Water);

const allTerrainCategories = [
  ObjectType.Water,
  ObjectType.Grass,
  ObjectType.Snow,
  ObjectType.Swamp,
  ObjectType.Lava,
  ObjectType.Desert,
  ObjectType.Dirt,
];

const nonWaterTerrainCategories = allTerrainCategories
  .filter((t) => t !== ObjectType.Water);

const heroObjects: (MapObjectData & HeroObjectData & CategorisedObjectData)[] = [
  {
    army: {
      preventMovingLastTroop: true,
    },
    baseMobility: 60,
    category: ObjectType.Monster,
    equipable: true,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Hero,
    ownable: true,
    width: 1,
  },
];

const townObjects: (MapObjectData & TownObjectData & CategorisedObjectData)[] = [
  {
    army: {
      preventMovingLastTroop: false,
    },
    category: "other",
    grid: [
      true, true, true, true,
      true, true, true, true,
      false, false, false, false,
    ],
    height: 3,
    id: ObjectId.Town,
    ownable: true,
    // FIXME: make town objects work
    width: 4,
  },
];

const randomTown: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomTown,
  restrictedTerrains: nonWaterTerrains,
  width: 4,
};

const randomCastle: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Town,
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomCastle,
  restrictedTerrains: nonWaterTerrains,
  width: 4,
};

type CreatureMapObjectData = CreatureObjectData & TerrainRestrictedObjectData;

const creatureObjects: (MapObjectData & CreatureMapObjectData)[] = creatures
  .map<MapObjectData & CreatureMapObjectData>((c) => ({
      category: ObjectType.Monster,
      creature: c.id,
      grid: [
        true,
      ],
      height: 1,
      id: c.id,
      restrictedTerrains: nonWaterTerrains,
      width: 1,
    }));

type RandomCreatureObject =
  MapObjectData &
  RandomCreatureObjectData &
  TerrainRestrictedObjectData &
  CategorisedObjectData;

const randomCreatureObjects: RandomCreatureObject[] = [
  {
    category: ObjectType.Monster,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature,
    randomCreature: {},
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Monster,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature1,
    randomCreature: {
      level: 1,
    },
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Monster,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature2,
    randomCreature: {
      level: 2,
    },
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Monster,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature3,
    randomCreature: {
      level: 3,
    },
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Monster,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature4,
    randomCreature: {
      level: 4,
    },
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
];

type ResourceMapObjectData = MapObjectData & ResourceObjectData & TerrainRestrictedObjectData;

const goldObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Gold,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Gold]: {
      // TODO: multiplies of 100
      max: 500,
      min: 1000,
    },
  },
  width: 1,
};

const woodObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Wood,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Wood]: {
      max: 15,
      min: 8,
    },
  },
  width: 1,
};

const oreObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Ore,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Ore]: {
      max: 16,
      min: 8,
    },
  },
  width: 1,
};

const crystalObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Crystal,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Crystal]: {
      max: 7,
      min: 4,
    },
  },
  width: 1,
};

const sulfurObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Sulfur,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Sulfur]: {
      max: 7,
      min: 4,
    },
  },
  width: 1,
};

const gemsObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Gems,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Gems]: {
      max: 7,
      min: 4,
    },
  },
  width: 1,
};

const mercuryObject: ResourceMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Mercury,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Mercury]: {
      max: 7,
      min: 4,
    },
  },
  width: 1,
};

const resourceObjects: ResourceMapObjectData[] = [
  woodObject,
  mercuryObject,
  oreObject,
  sulfurObject,
  crystalObject,
  gemsObject,
  goldObject,
];

const randomResourceObject: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.RandomResource,
  restrictedTerrains: nonWaterTerrains,
  width: 1,
};

type TreasureMapObjectData = TreasureObjectData & PickableObjectData & TerrainRestrictedObjectData;

const fireplace: MapObjectData & TreasureMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Fireplace,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {
    [ResourceId.Gold]: {
      max: 7,
      min: 4,
    },
    // TODO: gold + one other resource, x * 100 gold + x other resource
    [ResourceId.Wood]: {
      max: 7,
      min: 4,
    },
  },
  width: 1,
};

const fireplace2: typeof fireplace & VariantObjectData & CategorisedObjectData = {
  ...fireplace,
  category: [
    ObjectType.Snow,
  ],
  id: ObjectId.Fireplace2,
  restrictedTerrains: [
    TerrainType.Snow,
    // TODO: assets are available, but can't place on desert, remove?
    // TerrainType.Desert,
  ],
  variants: {
    [TerrainType.Snow]: "snow",
    [TerrainType.Desert]: "desert",
  },
};

const treasureChestObject: MapObjectData & TreasureMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.TreasureChest,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  width: 1,
};

const lampObject: MapObjectData & TreasureMapObjectData & CategorisedObjectData = {
  category: ObjectType.Treasure,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Lamp,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  width: 1,
};

const treasureObjects: (MapObjectData & TreasureMapObjectData)[] = [
  treasureChestObject,
  fireplace,
  fireplace2,
  lampObject,
];

type MineMapObjectData = MapObjectData & MineObjectData & TerrainRestrictedObjectData;

const mineObjectBase: MineMapObjectData & VariantObjectData & CategorisedObjectData = {
  category: nonWaterTerrainCategories,
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: "",
  ownable: true,
  resourceGenerator: {
    amount: 0,
    resource: "",
  },
  restrictedTerrains: nonWaterTerrains,
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Snow]: "snow",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Lava]: "swamp",
    [TerrainType.Desert]: "desert",
    [TerrainType.Dirt]: "dirt",
  },
  width: 2,
};

const mineObjects: (MineMapObjectData & VariantObjectData)[] = [
  {
    ...mineObjectBase,
    id: ObjectId.CrystalMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Crystal,
    },
  },
  {
    ...mineObjectBase,
    id: ObjectId.GemsMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Gems,
    },
  },
  {
    ...mineObjectBase,
    id: ObjectId.GoldMine,
    resourceGenerator: {
      amount: 1000,
      resource: ResourceId.Gold,
    },
  },
  {
    ...mineObjectBase,
    id: ObjectId.OreMine,
    resourceGenerator: {
      amount: 2,
      resource: ResourceId.Ore,
    },
  },
  {
    ...mineObjectBase,
    id: ObjectId.SulfurMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Sulfur,
    },
  },
];

const alchemist: MineMapObjectData & VariantObjectData & CategorisedObjectData = {
  category: nonWaterTerrainCategories,
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: ObjectId.Alchemist,
  ownable: true,
  resourceGenerator: {
    amount: 2,
    resource: ResourceId.Mercury,
  },
  restrictedTerrains: nonWaterTerrains,
  variants: {
    [TerrainType.Grass]: "swamp",
    [TerrainType.Snow]: "swamp",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Desert]: "desert",
    [TerrainType.Lava]: "lava",
    [TerrainType.Dirt]: "swamp",
  },
  width: 2,
};

const sawmill: MineMapObjectData & CategorisedObjectData = {
  category: nonWaterTerrainCategories,
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: ObjectId.Sawmill,
  ownable: true,
  resourceGenerator: {
    amount: 2,
    resource: ResourceId.Wood,
  },
  restrictedTerrains: nonWaterTerrains,
  width: 2,
};

const cottage: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Grass,
  dwelling: {
    creature: CreatureId.Archer,
    initialCount: 1, // 1-4
  },
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Cottage,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  width: 1,
};

const cottageSnow: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Snow,
  dwelling: {
    creature: CreatureId.Peasant,
    initialCount: 20, // 20-50
  },
  grid: [
    true,
    false,
  ],
  height: 2,
  id: ObjectId.CottageSnow,
  restrictedTerrains: [
    TerrainType.Snow,
  ],
  width: 1,
};

const desertTent: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Desert,
  dwelling: {
    creature: CreatureId.Nomad,
    initialCount: 10, // 10-20
  },
  grid: [
    true, true, true,
    false, false, false,
  ],
  height: 2,
  id: ObjectId.DesertTent,
  restrictedTerrains: [
    TerrainType.Desert,
  ],
  width: 3,
};

const hut: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Grass,
  dwelling: {
    creature: CreatureId.Goblin,
    initialCount: 10, // 10-20
  },
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Hut,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  width: 1,
};

const thatchedHut: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Grass,
  dwelling: {
    creature: CreatureId.Peasant,
    initialCount: 20, // 20-50
  },
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.ThatchedHut,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  width: 1,
};

const thatchedHutSnow: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Snow,
  dwelling: {
    creature: CreatureId.Dwarf,
    initialCount: 1, // 1-3
  },
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.ThatchedHutSnow,
  restrictedTerrains: [
    TerrainType.Snow,
  ],
  width: 1,
};

const wagonCamp: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: nonWaterTerrainCategories,
  dwelling: {
    creature: CreatureId.Rogue,
    initialCount: 30, // 30-50
  },
  grid: [
    true, true, true,
    false, true, true,
  ],
  height: 2,
  id: ObjectId.WagonCamp,
  restrictedTerrains: nonWaterTerrains,
  width: 3,
};

const dwellingObjects: (MapObjectData & DwellingObjectData & TerrainRestrictedObjectData)[] = [
  cottage,
  cottageSnow,
  desertTent,
  hut,
  thatchedHut,
  thatchedHutSnow,
  wagonCamp,
];

type ObeliskObject =
  MapObjectData &
  ObeliskObjectData &
  TerrainRestrictedObjectData &
  VariantObjectData &
  CategorisedObjectData;

const obelisk: ObeliskObject = {
  category: nonWaterTerrainCategories,
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Obelisk,
  interactionLimit: InteractionLimitType.OncePerPlayer,
  restrictedTerrains: nonWaterTerrains,
  uncoversPuzzlePiece: true,
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Snow]: "snow",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Desert]: "desert",
    [TerrainType.Lava]: "lava",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const cave: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Swamp,
    ObjectType.Lava,
    ObjectType.Desert,
  ],
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: ObjectId.Cave,
  restrictedTerrains: [
    TerrainType.Swamp,
    TerrainType.Lava,
    TerrainType.Desert,
  ],
  variants: {
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Lava]: "lava",
    [TerrainType.Desert]: "desert",
  },
  width: 2,
};

const faerieRing: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Swamp,
    ObjectType.Dirt,
  ],
  grid: [
    true, true,
  ],
  height: 1,
  id: ObjectId.FaerieRing,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Swamp,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Dirt]: "dirt",
  },
  width: 2,
};

const gazebo: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Dirt,
  ],
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Gazebo,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const roseBush: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Dirt,
  ],
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Rosebush,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const shrine: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Dirt,
  ],
  grid: [
    true, true, true,
    false, false, false,
  ],
  height: 2,
  id: ObjectId.Shrine,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 3,
};

const shrine2: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Swamp,
    ObjectType.Dirt,
  ],
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Shrine2,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Swamp,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const signpost: MapObjectData & TerrainRestrictedObjectData & VariantObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Snow,
    ObjectType.Swamp,
    ObjectType.Desert,
    ObjectType.Dirt,
  ],
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Signpost,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Snow,
    TerrainType.Swamp,
    TerrainType.Desert,
    TerrainType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Snow]: "snow",
    [TerrainType.Swamp]: "dirt",
    [TerrainType.Desert]: "desert",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const travelGate: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: [
    ObjectType.Grass,
    ObjectType.Swamp,
    ObjectType.Lava,
    ObjectType.Dirt,
  ],
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.TravelGate,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Swamp,
    TerrainType.Lava,
    TerrainType.Dirt,
  ],
  width: 1,
};

const travelGate2: typeof travelGate & VariantObjectData = {
  ...travelGate,
  category: [
    ObjectType.Snow,
    ObjectType.Desert,
  ],
  id: ObjectId.TravelGate2,
  restrictedTerrains: [
    TerrainType.Snow,
    TerrainType.Desert,
  ],
  variants: {
    [TerrainType.Snow]: "snow",
    [TerrainType.Desert]: "desert",
  },
};

type LighthouseObject =
  MapObjectData &
  TerrainRestrictedObjectData &
  OwnableObjectData &
  MobilityModifierObjectData &
  CategorisedObjectData;

const lighthouse: LighthouseObject = {
  category: [
    ObjectType.Grass,
    ObjectType.Swamp,
    ObjectType.Dirt,
  ],
  grid: [
    true, true, true,
    undefined, false, undefined,
  ],
  height: 2,
  id: ObjectId.Lighthouse,
  mobilityModifier: {
    [TerrainType.Water]: {
      type: "add",
      value: 20,
    },
  },
  ownable: true,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Swamp,
    TerrainType.Dirt,
  ],
  width: 3,
};

const otherObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  cave,
  faerieRing,
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
      ObjectType.Desert,
      ObjectType.Dirt,
    ],
    grid: [
      true, true, true,
      true, true, true,
      false, false, false,
      undefined, false, undefined,
    ],
    height: 4,
    id: ObjectId.DragonCity,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
      TerrainType.Desert,
      TerrainType.Dirt,
    ],
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Snow,
      ObjectType.Swamp,
      ObjectType.Dirt,
    ],
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Fountain,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Snow,
      TerrainType.Swamp,
      TerrainType.Dirt,
    ],
    width: 1,
  },
  gazebo,
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
      ObjectType.Dirt,
    ],
    grid: [
      true, true, true,
    ],
    height: 1,
    id: ObjectId.Graveyard,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
      TerrainType.Dirt,
    ],
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
      ObjectType.Dirt,
    ],
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Hole,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
      TerrainType.Dirt,
    ],
    width: 1,
  },
  lighthouse,
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
    ],
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: ObjectId.OakTree,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
    ],
    width: 2,
  },
  roseBush,
  shrine,
  shrine2,
  signpost,
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
      ObjectType.Dirt,
    ],
    grid: [
      true,
      false,
    ],
    height: 2,
    id: ObjectId.Statue,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
      TerrainType.Dirt,
    ],
    width: 1,
  },
  travelGate,
  travelGate2,
  {
    category: [
      ObjectType.Grass,
      ObjectType.Swamp,
      ObjectType.Dirt,
    ],
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.TreeStump,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Swamp,
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Dirt,
    ],
    grid: [
      true, true, true,
      true, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Waterwheel,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Dirt,
    ],
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Dirt,
    ],
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: ObjectId.Windmill,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Dirt,
    ],
    width: 2,
  },
];

const riverObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River1,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River2,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River3,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River4,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River5,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River6,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River7,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: allTerrainCategories,
    grid: [
      undefined, true, undefined,
      true, true, true,
      true, true, true,
    ],
    height: 3,
    id: ObjectId.River8,
    restrictedTerrains: allTerrains,
    width: 3,
  },
  {
    category: allTerrainCategories,
    grid: [
      true, true, true,
      true, true, true,
      undefined, true, undefined,
    ],
    height: 3,
    id: ObjectId.River9,
    restrictedTerrains: allTerrains,
    width: 3,
  },
];

const waterObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Water,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Buoy,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 1,
  },
  {
    category: ObjectType.Water,
    grid: [
      true, true,
      false, undefined,
    ],
    height: 2,
    id: ObjectId.Shipwreck,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 2,
  },
  {
    category: ObjectType.Water,
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Whirlpool,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 3,
  },
  {
    category: ObjectType.Water,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Water1,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 2,
  },
  {
    category: ObjectType.Water,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Water2,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 2,
  },
  {
    category: ObjectType.Water,
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: ObjectId.Water3,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    width: 3,
  },
];

const grassObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Grass,
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: ObjectId.GrassLake,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 4,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: ObjectId.GrassLakeBig,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 5,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass1,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass2,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass3,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass4,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass5,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass6,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass7,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass8,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass9,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  {
    category: ObjectType.Grass,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass10,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
];

const snowObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Snow,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.SnowLake,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 2,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.SnowLakeSmall,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 2,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: ObjectId.SnowLakeBig,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 4,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow1,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow2,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow3,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
];

const swampObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Swamp,
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.SwampLake,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 3,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 3,
    id: ObjectId.SwampLakeBig,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 5,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp1,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 1,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp2,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 1,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Swamp3,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 2,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp4,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 1,
  },
  {
    category: ObjectType.Swamp,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp5,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    width: 1,
  },
];

const lavaObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Lava,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Lava1,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 1,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Lava2,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 3,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true, true,
      true, true,
    ],
    height: 2,
    id: ObjectId.Lava3,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 2,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Lava4,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 1,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Lava5,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 3,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Lava6,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 2,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: ObjectId.Lava7,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 3,
  },
  {
    category: ObjectType.Lava,
    grid: [
      undefined, true, true,
      true, true, true,
      true, true, undefined,
    ],
    height: 3,
    id: ObjectId.Lava8,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 3,
  },
  {
    category: ObjectType.Lava,
    grid: [
      undefined, true, true,
      true, true, false,
    ],
    height: 2,
    id: ObjectId.Lava9,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 3,
  },
  {
    category: ObjectType.Lava,
    grid: [
      true,
      false,
    ],
    height: 2,
    id: ObjectId.Lava10,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    width: 1,
  },
];

const desertObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Desert,
    grid: [
      true, true, true, true,
      undefined, false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Oasis,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 4,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Skeleton,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 2,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Desert1,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 2,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Desert2,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 1,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true, true, true,
    ],
    height: 1,
    id: ObjectId.Desert3,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 3,
  },
];

const dirtObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: ObjectType.Dirt,
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.DirtLake,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 2,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: ObjectId.DirtLakeBig,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 5,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt1,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt2,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt3,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt4,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt5,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt6,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt7,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt8,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt9,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt10,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
  {
    category: ObjectType.Dirt,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt11,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    width: 1,
  },
];

const mountainObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Mountain1,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Mountain2,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Mountain3,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Mountain4,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
];

type TerrainMountainObject =
  MapObjectData &
  TerrainRestrictedObjectData &
  VariantObjectData &
  CategorisedObjectData;

const terrainMountainObjects: TerrainMountainObject[] = [
  {
    category: [
      ObjectType.Grass,
      ObjectType.Snow,
      ObjectType.Swamp,
      ObjectType.Desert,
      ObjectType.Dirt,
    ],
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Mountain5,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Snow,
      TerrainType.Swamp,
      TerrainType.Desert,
      TerrainType.Dirt,
    ],
    variants: {
      [TerrainType.Grass]: "grass",
      [TerrainType.Snow]: "snow",
      [TerrainType.Swamp]: "swamp",
      [TerrainType.Desert]: "desert",
      [TerrainType.Dirt]: "dirt",
    },
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Snow,
      ObjectType.Swamp,
      ObjectType.Desert,
      ObjectType.Dirt,
    ],
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Mountain6,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Snow,
      TerrainType.Swamp,
      TerrainType.Desert,
      TerrainType.Dirt,
    ],
    variants: {
      [TerrainType.Grass]: "grass",
      [TerrainType.Snow]: "snow",
      [TerrainType.Swamp]: "swamp",
      [TerrainType.Desert]: "desert",
      [TerrainType.Dirt]: "dirt",
    },
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Snow,
      ObjectType.Swamp,
      ObjectType.Desert,
      ObjectType.Dirt,
    ],
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Mountain7,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Snow,
      TerrainType.Swamp,
      TerrainType.Desert,
      TerrainType.Dirt,
    ],
    variants: {
      [TerrainType.Grass]: "grass",
      [TerrainType.Snow]: "snow",
      [TerrainType.Swamp]: "swamp",
      [TerrainType.Desert]: "desert",
      [TerrainType.Dirt]: "dirt",
    },
    width: 3,
  },
  {
    category: [
      ObjectType.Grass,
      ObjectType.Snow,
      ObjectType.Swamp,
      ObjectType.Desert,
      ObjectType.Dirt,
    ],
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Mountain8,
    restrictedTerrains: [
      TerrainType.Grass,
      TerrainType.Snow,
      TerrainType.Swamp,
      TerrainType.Desert,
      TerrainType.Dirt,
    ],
    variants: {
      [TerrainType.Grass]: "grass",
      [TerrainType.Snow]: "snow",
      [TerrainType.Swamp]: "swamp",
      [TerrainType.Desert]: "desert",
      [TerrainType.Dirt]: "dirt",
    },
    width: 3,
  },
];

const treesObjects: (MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData)[] = [
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees1,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees2,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees3,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees4,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees5,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees6,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees7,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 3,
  },
  {
    category: ObjectType.Snow,
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees8,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 3,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees9,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 3,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees10,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 3,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees11,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees12,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees13,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: ObjectType.Snow,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees14,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees15,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees16,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees17,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees18,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees19,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees20,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees21,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees22,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees23,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees24,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees25,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: nonWaterTerrainCategories,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees26,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees27,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 1,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees28,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 1,
  },
  {
    category: ObjectType.Desert,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees29,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 1,
  },
];

export const gameObjects: GameObjectData[] = [
  ...heroObjects,
  ...townObjects,
  randomCastle,
  randomTown,
  ...creatureObjects,
  ...randomCreatureObjects,
  ...resourceObjects,
  randomResourceObject,
  ...treasureObjects,
  ...artifactObjects,
  randomArtifactObject,
  ...mineObjects,
  alchemist,
  sawmill,
  ...dwellingObjects,
  obelisk,
  ...otherObjects,
  ...riverObjects,
  ...waterObjects,
  ...grassObjects,
  ...snowObjects,
  ...swampObjects,
  ...lavaObjects,
  ...desertObjects,
  ...dirtObjects,
  ...mountainObjects,
  ...terrainMountainObjects,
  ...treesObjects,
];
