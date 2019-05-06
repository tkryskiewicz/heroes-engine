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

const waterObjects: MapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Bouy,
    width: 1,
  },
  {
    grid: [
      true, true,
      false, undefined,
    ],
    height: 2,
    id: MapObjectId.Shipwreck,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: MapObjectId.Whirlpool,
    width: 3,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Water1,
    width: 2,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Water2,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: MapObjectId.Water3,
    width: 3,
  },
];

const grassObjects: MapObjectData[] = [
  {
    grid: [
      true, true, true, true,
    ],
    height: 1,
    id: MapObjectId.GrassLake,
    width: 4,
  },
  {
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: MapObjectId.GrassLakeBig,
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass1,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass2,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass3,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass4,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass5,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass6,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass7,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass8,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass9,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Grass10,
    width: 1,
  },
];

const swampObjects: MapObjectData[] = [
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: MapObjectId.SwampLake,
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
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Swamp1,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Swamp2,
    width: 1,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Swamp3,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Swamp4,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Swamp5,
    width: 1,
  },
];

const lavaObjects: MapObjectData[] = [
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Lava1,
    width: 1,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: MapObjectId.Lava2,
    width: 3,
  },
  {
    grid: [
      true, true,
      true, true,
    ],
    height: 2,
    id: MapObjectId.Lava3,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Lava4,
    width: 1,
  },
  {
    grid: [
      true, true, true,
      true, true, true,
    ],
    height: 2,
    id: MapObjectId.Lava5,
    width: 3,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Lava6,
    width: 2,
  },
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: MapObjectId.Lava7,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
    ],
    height: 2,
    id: MapObjectId.Lava9,
    width: 3,
  },
  {
    grid: [
      true,
      false,
    ],
    height: 2,
    id: MapObjectId.Lava10,
    width: 1,
  },
];

const desertObjects: MapObjectData[] = [
  {
    grid: [
      true, true, true,
      false, false, false,
    ],
    height: 2,
    id: MapObjectId.DesertTent,
    width: 3,
  },
  {
    grid: [
      true, true, true, true,
      undefined, false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Oasis,
    width: 4,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Skeleton,
    width: 2,
  },
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.Desert1,
    width: 2,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Desert2,
    width: 1,
  },
  {
    grid: [
      true, true, true,
    ],
    height: 1,
    id: MapObjectId.Desert3,
    width: 3,
  },
];

const dirtObjects: MapObjectData[] = [
  {
    grid: [
      true, true,
    ],
    height: 1,
    id: MapObjectId.DirtLake,
    width: 2,
  },
  {
    grid: [
      true, true, true, true, true,
      true, true, true, true, true,
    ],
    height: 2,
    id: MapObjectId.DirtLakeBig,
    width: 5,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt1,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt2,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt3,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt4,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt5,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt6,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt7,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt8,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt9,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt10,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Dirt11,
    width: 1,
  },
];

const mountainObjects: MapObjectData[] = [
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain1,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain2,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain4,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain5,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain6,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain8,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain9,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain10,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Mountain11,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain12,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain13,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain14,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Mountain15,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain16,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain17,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain18,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Mountain19,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain20,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      false, true, true,
      undefined, false, false,
    ],
    height: 3,
    id: MapObjectId.Mountain21,
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Mountain22,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Mountain23,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Mountain24,
    width: 3,
  },
];

const treesObjects: MapObjectData[] = [
  {
    grid: [
      undefined, true, true,
      true, true, false,
      false, false, undefined,
    ],
    height: 3,
    id: MapObjectId.Trees1,
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Trees2,
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
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Trees4,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees5,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees6,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Trees8,
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
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Trees10,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees11,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees12,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees13,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees14,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Trees16,
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
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Trees18,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees19,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees20,
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
    width: 3,
  },
  {
    grid: [
      undefined, true, true,
      false, false, undefined,
    ],
    height: 2,
    id: MapObjectId.Trees22,
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
    width: 3,
  },
  {
    grid: [
      true, true, undefined,
      undefined, false, false,
    ],
    height: 2,
    id: MapObjectId.Trees24,
    width: 3,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees25,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees26,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees27,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees28,
    width: 1,
  },
  {
    grid: [
      true,
    ],
    height: 1,
    id: MapObjectId.Trees29,
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
  ...waterObjects,
  ...grassObjects,
  ...swampObjects,
  ...lavaObjects,
  ...desertObjects,
  ...dirtObjects,
  ...mountainObjects,
  ...treesObjects,
];
