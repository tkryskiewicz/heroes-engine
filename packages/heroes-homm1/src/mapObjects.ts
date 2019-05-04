import {
  ArtifactMapObjectData,
  CreatureMapObjectData,
  DwellingMapObjectData,
  InteractionLimitType,
  MapObjectData,
  PickableMapObjectData,
  TreasureMapObjectData,
} from "heroes-core";

import { ArtifactId, artifacts } from "./artifacts";
import { CreatureId, creatures } from "./creatures";
import {
  HeroMapObjectData,
  MapObjectId,
  MineMapObjectData,
  ObeliskMapObjectData,
  ResourceMapObjectData,
  TownMapObjectData,
} from "./map";
import { Resource } from "./Resource";

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

const randomHero: MapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomHero,
  width: 1,
};

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

const randomTown: MapObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: MapObjectId.RandomTown,
  width: 4,
};

const randomCastle: MapObjectData = {
  grid: [
    true, true, true, true,
    true, true, true, true,
    false, false, false, false,
  ],
  height: 3,
  id: MapObjectId.RandomCastle,
  width: 4,
};

type CreatureObjectData = CreatureMapObjectData;

const creatureObjects: CreatureObjectData[] = creatures
  .map<CreatureObjectData>((c) => ({
    creature: c.id,
    grid: [
      true,
    ],
    height: 1,
    id: c.id,
    width: 1,
  }));

const randomCreature: MapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomCreature,
  width: 1,
};

type ArtifactObjectData = ArtifactMapObjectData & PickableMapObjectData;

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
    width: 1,
  }));

const randomArtifactObject: MapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomArtifact,
  width: 1,
};

const resourceObjects: ResourceMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Gold,
    pickable: true,
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
    treasure: {
      [Resource.Mercury]: {
        max: 7,
        min: 4,
      },
    },
    width: 1,
  },
];

const randomResourceObject: MapObjectData = {
  grid: [
    true,
  ],
  height: 1,
  id: MapObjectId.RandomResource,
  width: 1,
};

const treasureObjects: Array<TreasureMapObjectData & PickableMapObjectData> = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Fireplace,
    pickable: true,
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
  },
];

const mineObjects: MineMapObjectData[] = [
  {
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.CrystalMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Crystal,
    },
    width: 2,
  },
  {
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.GemsMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Crystal,
    },
    width: 2,
  },
  {
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.GoldMine,
    ownable: true,
    resourceGenerator: {
      amount: 1000,
      resource: Resource.Gold,
    },
    width: 2,
  },
  {
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
    width: 2,
  },
  {
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.OreMine,
    ownable: true,
    resourceGenerator: {
      amount: 2,
      resource: Resource.Ore,
    },
    width: 2,
  },
  {
    grid: [
      true, true,
      false, false,
    ],
    height: 2,
    id: MapObjectId.SulfurMine,
    ownable: true,
    resourceGenerator: {
      amount: 1,
      resource: Resource.Sulfur,
    },
    width: 2,
  },
  {
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
    width: 2,
  },
];

const dwellingObjects: DwellingMapObjectData[] = [
  {
    dwelling: {
      creature: CreatureId.Archer,
      initialCount: 3,
    },
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Cottage,
    width: 1,
  },
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
    width: 1,
  },
  {
    dwelling: {
      creature: CreatureId.Peasant,
      initialCount: 50,
    },
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.ThatchedHut,
    width: 1,
  },
];

const puzzleObjects: ObeliskMapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Obelisk,
    interactionLimit: InteractionLimitType.OncePerAlignment,
    uncoversPuzzlePiece: true,
    width: 1,
  },
];

export const mapObjects: MapObjectData[] = [
  ...heroObjects,
  randomHero,
  ...townObjects,
  randomTown,
  randomCastle,
  ...creatureObjects,
  randomCreature,
  ...resourceObjects,
  randomResourceObject,
  ...treasureObjects,
  ...artifactObjects,
  randomArtifactObject,
  ...mineObjects,
  ...dwellingObjects,
  ...puzzleObjects,
];
