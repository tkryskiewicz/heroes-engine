import {
  ArtifactMapObjectData,
  createCreatureMapObject,
  createMapObject as createMapObjectCore,
  CreatureMapObjectData,
  DwellingMapObjectData,
  GameData,
  Hero,
  InteractionLimitType,
  isCreatureMapObjectData,
  MapObject,
  MapObjectData,
  PickableMapObjectData,
  TreasureMapObjectData,
} from "heroes-core";

import { ArtifactId } from "./ArtifactId";
import { artifacts } from "./artifacts";
import { CreatureId, creatures } from "./creatures";
import {
  createHeroMapObject,
  createRandomCreatureMapObject,
  createRandomTownMapObject,
  HeroMapObjectData,
  isHeroMapObjectData,
  isRandomCreatureMapObjectData,
  isRandomTownMapObjectData,
  MapObjectId,
  MapObjectType,
  MineMapObjectData,
  ObeliskMapObjectData,
  RandomCreatureMapObjectData,
  ResourceMapObjectData,
  TerrainRestrictedMapObjectData,
  TownMapObjectData,
  VariantMapObjectData,
} from "./map";
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

const heroObjects: HeroMapObjectData[] = [
  {
    army: {
      preventMovingLastTroop: true,
    },
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Hero,
    ownable: true,
    type: MapObjectType.Monster,
    width: 1,
  },
];

const townObjects: TownMapObjectData[] = [
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
    id: MapObjectId.Town,
    ownable: true,
    // FIXME: make town objects work
    type: "other",
    width: 4,
  },
];

const randomTown: MapObjectData & TerrainRestrictedMapObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: MapObjectId.RandomTown,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Town,
  width: 4,
};

const randomCastle: MapObjectData & TerrainRestrictedMapObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: MapObjectId.RandomCastle,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Town,
  width: 4,
};

type CreatureObjectData = CreatureMapObjectData & TerrainRestrictedMapObjectData;

const creatureObjects: CreatureObjectData[] = creatures
  .map<CreatureObjectData>((c) => ({
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

const randomCreatureObjects: (RandomCreatureMapObjectData & TerrainRestrictedMapObjectData)[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.RandomCreature,
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
    id: MapObjectId.RandomCreature1,
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
    id: MapObjectId.RandomCreature2,
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
    id: MapObjectId.RandomCreature3,
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
    id: MapObjectId.RandomCreature4,
    randomCreature: {
      level: 4,
    },
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Monster,
    width: 1,
  },
];

type ArtifactObjectData = ArtifactMapObjectData & PickableMapObjectData & TerrainRestrictedMapObjectData;

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

const artifactObjects: ArtifactObjectData[] = artifacts
  .filter((a) => a.id !== ArtifactId.Spellbook && !a.isUltimate)
  .sort((a, b) => artifactObjectOrder.indexOf(a.id) - artifactObjectOrder.indexOf(b.id))
  .map<ArtifactObjectData>((a) => ({
    artifact: a.id,
    grid: [
      true,
    ],
    height: 1,
    id: a.id,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    type: MapObjectType.Artifact,
    width: 1,
  }));

const randomArtifactObject: TerrainRestrictedMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomArtifact,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Artifact,
  width: 1,
};

type ResourceObjectData = ResourceMapObjectData & TerrainRestrictedMapObjectData;

const goldObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Gold,
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

const woodObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Wood,
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

const oreObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Ore,
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

const crystalObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Crystal,
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

const sulfurObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Sulfur,
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

const gemsObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Gems,
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

const mercuryObject: ResourceObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Mercury,
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

const resourceObjects: ResourceObjectData[] = [
  woodObject,
  mercuryObject,
  oreObject,
  sulfurObject,
  crystalObject,
  gemsObject,
  goldObject,
];

const randomResourceObject: MapObjectData & TerrainRestrictedMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomResource,
  restrictedTerrains: nonWaterTerrains,
  type: MapObjectType.Treasure,
  width: 1,
};

type TreasureObjectData = TreasureMapObjectData & PickableMapObjectData & TerrainRestrictedMapObjectData;

const fireplace: TreasureObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Fireplace,
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

const fireplace2: typeof fireplace & VariantMapObjectData = {
  ...fireplace,
  id: MapObjectId.Fireplace2,
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

const treasureChestObject: TreasureObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.TreasureChest,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  type: MapObjectType.Treasure,
  width: 1,
};

const lampObject: TreasureObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Lamp,
  pickable: true,
  restrictedTerrains: nonWaterTerrains,
  treasure: {},
  type: MapObjectType.Treasure,
  width: 1,
};

const treasureObjects: TreasureObjectData[] = [
  treasureChestObject,
  fireplace,
  fireplace2,
  lampObject,
];

type MineObjectData = MineMapObjectData & TerrainRestrictedMapObjectData;

const mineObjectBase: MineObjectData & VariantMapObjectData = {
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

const mineObjects: (MineObjectData & VariantMapObjectData)[] = [
  {
    ...mineObjectBase,
    id: MapObjectId.CrystalMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Crystal,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.GemsMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Gems,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.GoldMine,
    resourceGenerator: {
      amount: 1000,
      resource: ResourceId.Gold,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.OreMine,
    resourceGenerator: {
      amount: 2,
      resource: ResourceId.Ore,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.SulfurMine,
    resourceGenerator: {
      amount: 1,
      resource: ResourceId.Sulfur,
    },
  },
];

const alchemist: MineObjectData & VariantMapObjectData = {
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: MapObjectId.Alchemist,
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

const sawmill: MineObjectData = {
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: MapObjectId.Sawmill,
  ownable: true,
  resourceGenerator: {
    amount: 2,
    resource: ResourceId.Wood,
  },
  restrictedTerrains: nonWaterTerrains,
  type: nonWaterTerrainTypes,
  width: 2,
};

const cottage: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Archer,
    initialCount: 1, // 1-4
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Cottage,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  type: MapObjectType.Grass,
  width: 1,
};

const cottageSnow: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Peasant,
    initialCount: 20, // 20-50
  },
  grid: [
    true,
    false,
  ],
  height: 2,
  id: MapObjectId.CottageSnow,
  restrictedTerrains: [
    TerrainType.Snow,
  ],
  type: MapObjectType.Snow,
  width: 1,
};

const desertTent: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Nomad,
    initialCount: 10, // 10-20
  },
  grid: [
    true, true, true,
    false, false, false,
  ],
  height: 2,
  id: MapObjectId.DesertTent,
  restrictedTerrains: [
    TerrainType.Desert,
  ],
  type: MapObjectType.Desert,
  width: 3,
};

const hut: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Goblin,
    initialCount: 10, // 10-20
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Hut,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  type: MapObjectType.Grass,
  width: 1,
};

const thatchedHut: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Peasant,
    initialCount: 20, // 20-50
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.ThatchedHut,
  restrictedTerrains: [
    TerrainType.Grass,
  ],
  type: MapObjectType.Grass,
  width: 1,
};

const thatchedHutSnow: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Dwarf,
    initialCount: 1, // 1-3
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.ThatchedHutSnow,
  restrictedTerrains: [
    TerrainType.Snow,
  ],
  type: MapObjectType.Snow,
  width: 1,
};

const wagonCamp: DwellingMapObjectData & TerrainRestrictedMapObjectData = {
  dwelling: {
    creature: CreatureId.Rogue,
    initialCount: 30, // 30-50
  },
  grid: [
    true, true, true,
    false, true, true,
  ],
  height: 2,
  id: MapObjectId.WagonCamp,
  restrictedTerrains: nonWaterTerrains,
  type: nonWaterTerrainTypes,
  width: 3,
};

const dwellingObjects: (DwellingMapObjectData & TerrainRestrictedMapObjectData)[] = [
  cottage,
  cottageSnow,
  desertTent,
  hut,
  thatchedHut,
  thatchedHutSnow,
  wagonCamp,
];

const obelisk: ObeliskMapObjectData & TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Obelisk,
  interactionLimit: InteractionLimitType.OncePerAlignment,
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

const cave: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true, true,
    false, false,
  ],
  height: 2,
  id: MapObjectId.Cave,
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

const faerieRing: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true, true,
  ],
  height: 1,
  id: MapObjectId.FaerieRing,
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

const gazebo: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Gazebo,
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

const roseBush: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Rosebush,
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

const shrine: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true, true, true,
    false, false, false,
  ],
  height: 2,
  id: MapObjectId.Shrine,
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

const shrine2: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Shrine2,
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

const signpost: TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Signpost,
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

const travelGate: TerrainRestrictedMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.TravelGate,
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

const travelGate2: typeof travelGate & VariantMapObjectData = {
  ...travelGate,
  id: MapObjectId.TravelGate2,
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

const otherObjects: TerrainRestrictedMapObjectData[] = [
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
    id: MapObjectId.DragonCity,
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
    id: MapObjectId.Fountain,
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
    id: MapObjectId.Graveyard,
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
    id: MapObjectId.Hole,
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
      undefined, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Lighthouse,
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
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.OakTree,
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
    id: MapObjectId.Statue,
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
    id: MapObjectId.TreeStump,
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
    id: MapObjectId.Waterwheel,
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
    id: MapObjectId.Windmill,
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

const riverObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River1,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River2,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River3,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River5,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River6,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River7,
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
    id: MapObjectId.River8,
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
    id: MapObjectId.River9,
    restrictedTerrains: allTerrains,
    type: allTerrainTypes,
    width: 3,
  },
];

const waterObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Buoy,
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
    id: MapObjectId.Shipwreck,
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
    id: MapObjectId.Whirlpool,
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
    id: MapObjectId.Water1,
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
    id: MapObjectId.Water2,
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
    id: MapObjectId.Water3,
    restrictedTerrains: [
      TerrainType.Water,
    ],
    type: MapObjectType.Water,
    width: 3,
  },
];

const grassObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: MapObjectId.GrassLake,
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
    id: MapObjectId.GrassLakeBig,
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
    id: MapObjectId.Grass1,
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
    id: MapObjectId.Grass2,
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
    id: MapObjectId.Grass3,
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
    id: MapObjectId.Grass4,
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
    id: MapObjectId.Grass5,
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
    id: MapObjectId.Grass6,
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
    id: MapObjectId.Grass7,
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
    id: MapObjectId.Grass8,
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
    id: MapObjectId.Grass9,
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
    id: MapObjectId.Grass10,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    type: MapObjectType.Grass,
    width: 1,
  },
];

const snowObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.SnowLake,
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
    id: MapObjectId.SnowLakeSmall,
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
    id: MapObjectId.SnowLakeBig,
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
    id: MapObjectId.Snow1,
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
    id: MapObjectId.Snow2,
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
    id: MapObjectId.Snow3,
    restrictedTerrains: [
      TerrainType.Snow,
    ],
    type: MapObjectType.Snow,
    width: 1,
  },
];

const swampObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: MapObjectId.SwampLake,
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
    id: MapObjectId.SwampLakeBig,
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
    id: MapObjectId.Swamp1,
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
    id: MapObjectId.Swamp2,
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
    id: MapObjectId.Swamp3,
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
    id: MapObjectId.Swamp4,
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
    id: MapObjectId.Swamp5,
    restrictedTerrains: [
      TerrainType.Swamp,
    ],
    type: MapObjectType.Swamp,
    width: 1,
  },
];

const lavaObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Lava1,
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
    id: MapObjectId.Lava2,
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
    id: MapObjectId.Lava3,
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
    id: MapObjectId.Lava4,
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
    id: MapObjectId.Lava5,
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
    id: MapObjectId.Lava6,
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
    id: MapObjectId.Lava7,
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
    id: MapObjectId.Lava8,
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
    id: MapObjectId.Lava9,
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
    id: MapObjectId.Lava10,
    restrictedTerrains: [
      TerrainType.Lava,
    ],
    type: MapObjectType.Lava,
    width: 1,
  },
];

const desertObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true, true, true,
      undefined, false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Oasis,
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
    id: MapObjectId.Skeleton,
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
    id: MapObjectId.Desert1,
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
    id: MapObjectId.Desert2,
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
    id: MapObjectId.Desert3,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    type: MapObjectType.Desert,
    width: 3,
  },
];

const dirtObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.DirtLake,
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
    id: MapObjectId.DirtLakeBig,
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
    id: MapObjectId.Dirt1,
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
    id: MapObjectId.Dirt2,
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
    id: MapObjectId.Dirt3,
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
    id: MapObjectId.Dirt4,
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
    id: MapObjectId.Dirt5,
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
    id: MapObjectId.Dirt6,
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
    id: MapObjectId.Dirt7,
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
    id: MapObjectId.Dirt8,
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
    id: MapObjectId.Dirt9,
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
    id: MapObjectId.Dirt10,
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
    id: MapObjectId.Dirt11,
    restrictedTerrains: [
      TerrainType.Dirt,
    ],
    type: MapObjectType.Dirt,
    width: 1,
  },
];

const mountainObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain1,
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
    id: MapObjectId.Mountain2,
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
    id: MapObjectId.Mountain3,
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
    id: MapObjectId.Mountain4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
];

const terrainMountainObjects: (TerrainRestrictedMapObjectData & VariantMapObjectData)[] = [
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain5,
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
    id: MapObjectId.Mountain6,
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
    id: MapObjectId.Mountain7,
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
    id: MapObjectId.Mountain8,
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

const treesObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Trees1,
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
    id: MapObjectId.Trees2,
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
    id: MapObjectId.Trees3,
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
    id: MapObjectId.Trees4,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees5,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees6,
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
    id: MapObjectId.Trees7,
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
    id: MapObjectId.Trees8,
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
    id: MapObjectId.Trees9,
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
    id: MapObjectId.Trees10,
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
    id: MapObjectId.Trees11,
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
    id: MapObjectId.Trees12,
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
    id: MapObjectId.Trees13,
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
    id: MapObjectId.Trees14,
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
    id: MapObjectId.Trees15,
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
    id: MapObjectId.Trees16,
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
    id: MapObjectId.Trees17,
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
    id: MapObjectId.Trees18,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees19,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees20,
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
    id: MapObjectId.Trees21,
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
    id: MapObjectId.Trees22,
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
    id: MapObjectId.Trees23,
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
    id: MapObjectId.Trees24,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees25,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees26,
    restrictedTerrains: nonWaterTerrains,
    type: nonWaterTerrainTypes,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees27,
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
    id: MapObjectId.Trees28,
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
    id: MapObjectId.Trees29,
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

export const createMapObject = (id: string, objectData: MapObjectData, data: GameData): MapObject => {
  if (isCreatureMapObjectData(objectData)) {
    return createCreatureMapObject(id, objectData);
  }

  if (isRandomCreatureMapObjectData(objectData)) {
    return createRandomCreatureMapObject(id, objectData);
  }

  if (isHeroMapObjectData(objectData)) {
    const heroId = Object.keys(data.heroes)[0];

    const hero: Hero = {
      army: [...new Array(data.armySize).keys()]
        .map(() => ({ creature: Object.keys(data.creatures)[0], count: 0 })),
      artifacts: [],
      dataId: MapObjectId.Hero,
      experience: 0,
      heroClass: data.heroes[heroId].heroClass,
      heroId,
      id,
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    return createHeroMapObject(id, objectData, hero, data.alignments[0]);
  }

  if (isRandomTownMapObjectData(objectData)) {
    return createRandomTownMapObject(id, objectData, data);
  }

  return createMapObjectCore(id, objectData);
};
