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

import { ArtifactId, artifacts } from "./artifacts";
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
  MineMapObjectData,
  ObeliskMapObjectData,
  RandomCreatureMapObjectData,
  ResourceMapObjectData,
  TerrainRestrictedMapObjectData,
  TownMapObjectData,
  VariantMapObjectData,
} from "./map";
import { Resource } from "./Resource";
import { TerrainType } from "./TerrainType";

const allTerrains = Object.values(TerrainType);
const nonWaterTerrains = Object.values(TerrainType).filter((t) => t !== TerrainType.Water);

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
    width: 1,
  }));

const randomCreatureObjects: Array<RandomCreatureMapObjectData & TerrainRestrictedMapObjectData> = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.RandomCreature,
    randomCreature: {},
    restrictedTerrains: nonWaterTerrains,
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
    width: 1,
  },
];

type ArtifactObjectData = ArtifactMapObjectData & PickableMapObjectData & TerrainRestrictedMapObjectData;

const artifactObjects: ArtifactObjectData[] = artifacts
  .filter((a) => a.id !== ArtifactId.Spellbook && !a.isUltimate)
  .map<ArtifactObjectData>((a) => ({
    artifact: a.id,
    grid: [
      true,
    ],
    height: 1,
    id: a.id,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  }));

const randomArtifactObject: TerrainRestrictedMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomArtifact,
  restrictedTerrains: nonWaterTerrains,
  width: 1,
};

type ResourceObjectData = ResourceMapObjectData & TerrainRestrictedMapObjectData;

const resourceObjects: ResourceObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Gold,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Gold]: {
        // TODO: multiplies of 100
        max: 500,
        min: 1000,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Wood,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Wood]: {
        max: 15,
        min: 8,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Ore,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Ore]: {
        max: 16,
        min: 8,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Crystal,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Crystal]: {
        max: 7,
        min: 4,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Sulfur,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Sulfur]: {
        max: 7,
        min: 4,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Gems,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Gems]: {
        max: 7,
        min: 4,
      },
    },
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Mercury,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {
      [Resource.Mercury]: {
        max: 7,
        min: 4,
      },
    },
    width: 1,
  },
];

const randomResourceObject: MapObjectData & TerrainRestrictedMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomResource,
  restrictedTerrains: nonWaterTerrains,
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
    [Resource.Gold]: {
      max: 7,
      min: 4,
    },
    // TODO: gold + one other resource, x * 100 gold + x other resource
    [Resource.Wood]: {
      max: 7,
      min: 4,
    },
  },
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
  variants: {
    [TerrainType.Snow]: "snow",
    [TerrainType.Desert]: "desert",
  },
};

const treasureObjects: TreasureObjectData[] = [
  fireplace,
  fireplace2,
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.TreasureChest,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {},
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Lamp,
    pickable: true,
    restrictedTerrains: nonWaterTerrains,
    treasure: {},
    width: 1,
  },
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

const mineObjects: Array<MineObjectData & VariantMapObjectData> = [
  {
    ...mineObjectBase,
    id: MapObjectId.CrystalMine,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Crystal,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.GemsMine,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Gems,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.GoldMine,
    resourceGenerator: {
      amount: 1000,
      resource: Resource.Gold,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.OreMine,
    resourceGenerator: {
      amount: 2,
      resource: Resource.Ore,
    },
  },
  {
    ...mineObjectBase,
    id: MapObjectId.SulfurMine,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Sulfur,
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
    resource: Resource.Mercury,
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
    resource: Resource.Wood,
  },
  restrictedTerrains: nonWaterTerrains,
  width: 2,
};

const cottage: DwellingMapObjectData & TerrainRestrictedMapObjectData & VariantMapObjectData = {
  dwelling: {
    creature: CreatureId.Archer,
    initialCount: 3,
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Cottage,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Snow,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Snow]: "snow",
  },
  width: 1,
};

const thatchedHut: DwellingMapObjectData & TerrainRestrictedMapObjectData & VariantMapObjectData = {
  dwelling: {
    creature: CreatureId.Peasant,
    initialCount: 50,
  },
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.ThatchedHut,
  restrictedTerrains: [
    TerrainType.Grass,
    TerrainType.Snow,
  ],
  variants: {
    [TerrainType.Grass]: "grass",
    [TerrainType.Snow]: "snow",
  },
  width: 1,
};

const dwellingObjects: Array<DwellingMapObjectData & TerrainRestrictedMapObjectData> = [
  cottage,
  {
    dwelling: {
      creature: CreatureId.Goblin,
      initialCount: 27,
    },
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Hut,
    restrictedTerrains: [
      TerrainType.Grass,
    ],
    width: 1,
  },
  thatchedHut,
];

const obelisk: ObeliskMapObjectData & TerrainRestrictedMapObjectData & VariantMapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.Obelisk,
  interactionLimit: InteractionLimitType.OncePerAlignment,
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
  width: 1,
};

const travelGate2: typeof travelGate & VariantMapObjectData = {
  ...travelGate,
  id: MapObjectId.TravelGate2,
  restrictedTerrains: [
    TerrainType.Snow,
    TerrainType.Desert,
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
    width: 1,
  },
  {
    grid: [
      true, true, true,
      false, true, true,
    ],
    height: 2,
    id: MapObjectId.WagonCamp,
    restrictedTerrains: nonWaterTerrains,
    width: 3,
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
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River2,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River3,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River4,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River5,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River6,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.River7,
    restrictedTerrains: nonWaterTerrains,
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
    width: 3,
  },
];

const waterObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Bouy,
    restrictedTerrains: [
      TerrainType.Water,
    ],
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
    width: 1,
  },
];

const desertObjects: TerrainRestrictedMapObjectData[] = [
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: MapObjectId.DesertTent,
    restrictedTerrains: [
      TerrainType.Desert,
    ],
    width: 3,
  },
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
    width: 3,
  },
];

const terrainMountainObjects: Array<TerrainRestrictedMapObjectData & VariantMapObjectData> = [
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
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees5,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees6,
    restrictedTerrains: nonWaterTerrains,
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
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees19,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees20,
    restrictedTerrains: nonWaterTerrains,
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
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees25,
    restrictedTerrains: nonWaterTerrains,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees26,
    restrictedTerrains: nonWaterTerrains,
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
    width: 1,
  },
];

export const mapObjects: MapObjectData[] = [
  ...heroObjects,
  ...townObjects,
  randomTown,
  randomCastle,
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
      id: heroId,
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
