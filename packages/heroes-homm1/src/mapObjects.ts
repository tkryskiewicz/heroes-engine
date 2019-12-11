import {
  CreatureObjectData,
  DwellingObjectData,
  InteractionLimitType,
  ItemObjectData,
  MapObjectData,
  MobilityModifierObjectData,
  OwnableObjectData,
  PickableObjectData,
  TreasureObjectData,
} from "heroes-core";

import { ArtifactId } from "./ArtifactId";
import { artifacts } from "./artifacts";
import { CreatureId, creatures } from "./creatures";
import { MapObjectType } from "./map";
import { ObjectId } from "./ObjectId";
import {
  HeroObjectData,
  isUltimateObjectData,
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

const allTerrainTypes = [
  MapObjectType.Water,
  MapObjectType.Grass,
  MapObjectType.Snow,
  MapObjectType.Swamp,
  MapObjectType.Lava,
  MapObjectType.Desert,
  MapObjectType.Dirt,
];
const nonWaterTerrainTypes = allTerrainTypes
  .filter((t) => t !== MapObjectType.Water);

const heroObjects: (MapObjectData & HeroObjectData)[] = [
  {
    army: {
      preventMovingLastTroop: true,
    },
    baseMobility: 60,
    equipable: true,
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Hero,
    ownable: true,
    type: MapObjectType.Monster,
    width: 1,
  },
];

const townObjects: (MapObjectData & TownObjectData)[] = [
  {
    army: {
      preventMovingLastTroop: false,
    },
    grid: [
      true, true, true, true,
      true, true, true, true,
      false, false, false, false,
    ],
    height: 3,
    id: ObjectId.Town,
    ownable: true,
    // FIXME: make town objects work
    type: "other",
    width: 4,
  },
];

const randomTown: MapObjectData & TerrainRestrictedObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomTown,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Town,
  width: 4,
};

const randomCastle: MapObjectData & TerrainRestrictedObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: ObjectId.RandomCastle,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Town,
  width: 4,
};

type CreatureMapObjectData = CreatureObjectData & TerrainRestrictedObjectData;

const creatureObjects: (MapObjectData & CreatureMapObjectData)[] = creatures
  .map<MapObjectData & CreatureMapObjectData>((c) => ({
    creature: c.id,
    grid: [
      true,
    ],
    height: 1,
    id: c.id,
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  }));

const randomCreatureObjects: (MapObjectData & RandomCreatureObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature,
    randomCreature: {},
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature1,
    randomCreature: {
      level: 1,
    },
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature2,
    randomCreature: {
      level: 2,
    },
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature3,
    randomCreature: {
      level: 3,
    },
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.RandomCreature4,
    randomCreature: {
      level: 4,
    },
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
];

type ArtifactObjectData = ItemObjectData & PickableObjectData & TerrainRestrictedObjectData;

const artifactObjectOrder: string[] = [
  ArtifactId.ArcaneNecklaceOfMagic,
  ArtifactId.CastersBraceletOfMagic,
  ArtifactId.MagesRingOfPower,
  ArtifactId.WitchsBroachOfMagic,

  ArtifactId.MedalOfValor,
  ArtifactId.MedalOfCourage,
  ArtifactId.MedalOfHonor,
  ArtifactId.MedalOfDistinction,

  ArtifactId.FizbinOfMisfortune,

  ArtifactId.ThunderMaceOfDominion,
  ArtifactId.ArmoredGauntletsOfProtection,
  ArtifactId.DefenderHelmOfProtection,
  ArtifactId.GiantFlailOfDominion,
  ArtifactId.BallistaOfQuickness,
  ArtifactId.StealthShieldOfProtection,
  ArtifactId.DragonSwordOfDominion,
  ArtifactId.PowerAxeOfDominion,
  ArtifactId.DivineBreastplateOfProtection,

  ArtifactId.MinorScrollOfKnowledge,
  ArtifactId.MajorScrollOfKnowledge,
  ArtifactId.SuperiorScrollOfKnowledge,
  ArtifactId.ForemostScrollOfKnowledge,

  ArtifactId.EndlessSackOfGold,
  ArtifactId.EndlessBagOfGold,
  ArtifactId.EndlessPurseOfGold,

  ArtifactId.NomadBootsOfMobility,
  ArtifactId.TravelersBootsOfMobility,

  ArtifactId.LuckyRabbitsFoot,
  ArtifactId.GoldenHoreshoe,
  ArtifactId.GamblersLuckyCoin,
  ArtifactId.FourLeafClover,
  ArtifactId.TrueCompassOfMobility,
  ArtifactId.SailorsAstrolabeOfMobility,
];

const artifactObjects: (MapObjectData & ArtifactObjectData)[] = artifacts
  .filter((a) => a.id !== ArtifactId.Spellbook && !isUltimateObjectData(a))
  .sort((a, b) => artifactObjectOrder.indexOf(a.id) - artifactObjectOrder.indexOf(b.id))
  .map<MapObjectData & ArtifactObjectData>((a) => ({
    grid: [
      true,
    ],
    height: 1,
    id: a.id,
    item: a.id,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Artifact,
    width: 1,
  }));

const randomArtifactObject: MapObjectData & TerrainRestrictedObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.RandomArtifact,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Artifact,
  width: 1,
};

type ResourceMapObjectData = MapObjectData & ResourceObjectData & TerrainRestrictedObjectData;

const goldObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const woodObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const oreObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const crystalObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const sulfurObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const gemsObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const mercuryObject: ResourceMapObjectData = {
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
  type: MapObjectType.Treasure,
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

const randomResourceObject: MapObjectData & TerrainRestrictedObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.RandomResource,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Treasure,
  width: 1,
};

type TreasureMapObjectData = TreasureObjectData & PickableObjectData & TerrainRestrictedObjectData;

const fireplace: MapObjectData & TreasureMapObjectData = {
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
  type: MapObjectType.Treasure,
  width: 1,
};

const fireplace2: typeof fireplace & VariantObjectData = {
  ...fireplace,
  id: ObjectId.Fireplace2,
  restrictedTerrains: [
    TerrainType.Snow,
    // TODO: assets are available, but can't place on desert, remove?
    // TerrainType.Desert,
  ],
  type: [
    MapObjectType.Snow,
  ],
  variants: {
    [TerrainType.Snow]: "snow",
    [TerrainType.Desert]: "desert",
  },
};

const treasureChestObject: MapObjectData & TreasureMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.TreasureChest,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  type: MapObjectType.Treasure,
  width: 1,
};

const lampObject: MapObjectData & TreasureMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Lamp,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  type: MapObjectType.Treasure,
  width: 1,
};

const treasureObjects: (MapObjectData & TreasureMapObjectData)[] = [
  treasureChestObject,
  fireplace,
  fireplace2,
  lampObject,
];

type MineMapObjectData = MapObjectData & MineObjectData & TerrainRestrictedObjectData;

const mineObjectBase: MineMapObjectData & VariantObjectData = {
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
  type: nonWaterTerrainTypes,
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

const alchemist: MineMapObjectData & VariantObjectData = {
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
  type: nonWaterTerrainTypes,
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

const sawmill: MineMapObjectData = {
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
  type: nonWaterTerrainTypes,
  width: 2,
};

const cottage: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Grass,
  width: 1,
};

const cottageSnow: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Snow,
  width: 1,
};

const desertTent: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Desert,
  width: 3,
};

const hut: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Grass,
  width: 1,
};

const thatchedHut: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Grass,
  width: 1,
};

const thatchedHutSnow: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: MapObjectType.Snow,
  width: 1,
};

const wagonCamp: MapObjectData & DwellingObjectData & TerrainRestrictedObjectData = {
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
  type: nonWaterTerrainTypes,
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

const obelisk: MapObjectData & ObeliskObjectData & TerrainRestrictedObjectData & VariantObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Obelisk,
  interactionLimit: InteractionLimitType.OncePerPlayer,
  restrictedTerrains: nonWaterTerrains,
  type: nonWaterTerrainTypes,
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

const cave: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
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
  type: [
    MapObjectType.Swamp,
    MapObjectType.Lava,
    MapObjectType.Desert,
  ],
  variants: {
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Lava]: "lava",
    [TerrainType.Desert]: "desert",
  },
  width: 2,
};

const faerieRing: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Swamp,
    MapObjectType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Dirt]: "dirt",
  },
  width: 2,
};

const gazebo: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Gazebo,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Dirt,
  ],
  type: [
    MapObjectType.Grass,
    MapObjectType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const roseBush: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: ObjectId.Rosebush,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Dirt,
  ],
  type: [
    MapObjectType.Grass,
    MapObjectType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const shrine: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Dirt]: "dirt",
  },
  width: 3,
};

const shrine2: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Swamp,
    MapObjectType.Dirt,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Swamp]: "swamp",
    [TerrainType.Dirt]: "dirt",
  },
  width: 1,
};

const signpost: MapObjectData & TerrainRestrictedObjectData & VariantObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Snow,
    MapObjectType.Swamp,
    MapObjectType.Desert,
    MapObjectType.Dirt,
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

const travelGate: MapObjectData & TerrainRestrictedObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Swamp,
    MapObjectType.Lava,
    MapObjectType.Dirt,
  ],
  width: 1,
};

const travelGate2: typeof travelGate & VariantObjectData = {
  ...travelGate,
  id: ObjectId.TravelGate2,
  restrictedTerrains: [
    TerrainType.Snow,
    TerrainType.Desert,
  ],
  type: [
    MapObjectType.Snow,
    MapObjectType.Desert,
  ],
  variants: {
    [TerrainType.Snow]: "snow",
    [TerrainType.Desert]: "desert",
  },
};

const lighthouse: MapObjectData & TerrainRestrictedObjectData & OwnableObjectData & MobilityModifierObjectData = {
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
  type: [
    MapObjectType.Grass,
    MapObjectType.Swamp,
    MapObjectType.Dirt,
  ],
  width: 3,
};

const otherObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  cave,
  faerieRing,
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
      MapObjectType.Desert,
      MapObjectType.Dirt,
    ],
    width: 3,
  },
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Snow,
      MapObjectType.Swamp,
      MapObjectType.Dirt,
    ],
    width: 1,
  },
  gazebo,
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
      MapObjectType.Dirt,
    ],
    width: 3,
  },
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
      MapObjectType.Dirt,
    ],
    width: 1,
  },
  lighthouse,
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
    ],
    width: 2,
  },
  roseBush,
  shrine,
  shrine2,
  signpost,
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
      MapObjectType.Dirt,
    ],
    width: 1,
  },
  travelGate,
  travelGate2,
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Swamp,
      MapObjectType.Dirt,
    ],
    width: 1,
  },
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Dirt,
    ],
    width: 3,
  },
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Dirt,
    ],
    width: 2,
  },
];

const riverObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River1,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River2,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River3,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River5,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River6,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.River7,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      undefined, true, undefined,
      true, true, true,
      true, true, true,
    ],
    height: 3,
    id: ObjectId.River8,
    restrictedTerrains: allTerrains,
    type: allTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
      undefined, true, undefined,
    ],
    height: 3,
    id: ObjectId.River9,
    restrictedTerrains: allTerrains,
    type: allTerrainTypes,
    width: 3,
  },
];

const waterObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Buoy,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 1,
  },
  {
    grid: [
      true, true,
      false, undefined,
    ],
    height: 2,
    id: ObjectId.Shipwreck,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Whirlpool,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 3,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Water1,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 2,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Water2,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: ObjectId.Water3,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 3,
  },
];

const grassObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: ObjectId.GrassLake,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 4,
  },
  {
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: ObjectId.GrassLakeBig,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass1,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass2,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass3,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass4,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass5,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass6,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass7,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass8,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass9,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Grass10,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
];

const snowObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.SnowLake,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 2,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.SnowLakeSmall,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 2,
  },
  {
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: ObjectId.SnowLakeBig,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 4,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow1,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow2,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Snow3,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
];

const swampObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.SwampLake,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 3,
  },
  {
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
    type: MapObjectType.Swamp,
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp1,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp2,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 1,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Swamp3,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp4,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Swamp5,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 1,
  },
];

const lavaObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Lava1,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 1,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Lava2,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 3,
  },
  {
    grid: [
      true, true,
      true, true,
    ],
    height: 2,
    id: ObjectId.Lava3,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Lava4,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 1,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: ObjectId.Lava5,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 3,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Lava6,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: ObjectId.Lava7,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 3,
  },
  {
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
    type: MapObjectType.Lava,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
    ],
    height: 2,
    id: ObjectId.Lava9,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 3,
  },
  {
    grid: [
      true,
      false,
    ],
    height: 2,
    id: ObjectId.Lava10,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 1,
  },
];

const desertObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true, true, true,
      undefined, false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Oasis,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 4,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Skeleton,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 2,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.Desert1,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Desert2,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 1,
  },
  {
    grid: [
      true, true, true,
    ],
    height: 1,
    id: ObjectId.Desert3,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 3,
  },
];

const dirtObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: ObjectId.DirtLake,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 2,
  },
  {
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: ObjectId.DirtLakeBig,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt1,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt2,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt3,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt4,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt5,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt6,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt7,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt8,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt9,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt10,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Dirt11,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
];

const mountainObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Mountain1,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Mountain2,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Mountain3,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Mountain4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
];

const terrainMountainObjects: (MapObjectData & TerrainRestrictedObjectData & VariantObjectData)[] = [
  {
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Snow,
      MapObjectType.Swamp,
      MapObjectType.Desert,
      MapObjectType.Dirt,
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Snow,
      MapObjectType.Swamp,
      MapObjectType.Desert,
      MapObjectType.Dirt,
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Snow,
      MapObjectType.Swamp,
      MapObjectType.Desert,
      MapObjectType.Dirt,
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
    type: [
      MapObjectType.Grass,
      MapObjectType.Snow,
      MapObjectType.Swamp,
      MapObjectType.Desert,
      MapObjectType.Dirt,
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

const treesObjects: (MapObjectData & TerrainRestrictedObjectData)[] = [
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees1,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees2,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees3,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees5,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees6,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
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
    type: MapObjectType.Snow,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees8,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 3,
  },
  {
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
    type: MapObjectType.Snow,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees10,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees11,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees12,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees13,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees14,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees15,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees16,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees17,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees18,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees19,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees20,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: ObjectId.Trees21,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: ObjectId.Trees22,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: ObjectId.Trees23,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: ObjectId.Trees24,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees25,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees26,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees27,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees28,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: ObjectId.Trees29,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 1,
  },
];

export const mapObjects: MapObjectData[] = [
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
