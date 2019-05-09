import {
  GameData,
  isArtifactMapObjectData,
  isCreatureMapObjectData,
  MapObjectData,
} from "heroes-core";
import {
  EditorObjectType,
  isResourceMapObject,
  isResourceMapObjectData,
  isTerrainRestrictedMapObjectData,
  MapObjectId,
  TerrainType,
} from "heroes-homm1";

const mountainObjects = [
  MapObjectId.Mountain1,
  MapObjectId.Mountain2,
  MapObjectId.Mountain3,
  MapObjectId.Mountain4,
];

const grassMountainObjects = [
  MapObjectId.Mountain9,
  MapObjectId.Mountain10,
  MapObjectId.Mountain11,
  MapObjectId.Mountain12,
  MapObjectId.Mountain21,
  MapObjectId.Mountain22,
  MapObjectId.Mountain23,
  MapObjectId.Mountain24,
];

const snowMountainObjects = [
  MapObjectId.Mountain21,
  MapObjectId.Mountain22,
  MapObjectId.Mountain23,
  MapObjectId.Mountain24,
];

const swampMountainObjects = [
  MapObjectId.Mountain17,
  MapObjectId.Mountain18,
  MapObjectId.Mountain19,
  MapObjectId.Mountain20,
];

const desertMountainObjects = [
  MapObjectId.Mountain13,
  MapObjectId.Mountain14,
  MapObjectId.Mountain15,
  MapObjectId.Mountain16,
];

const dirtMountainObjects = [
  MapObjectId.Mountain5,
  MapObjectId.Mountain6,
  MapObjectId.Mountain7,
  MapObjectId.Mountain8,
];

const treesObjects = [
  MapObjectId.Trees23,
  MapObjectId.Trees24,
  MapObjectId.Trees21,
  MapObjectId.Trees22,
  MapObjectId.Trees25,
  MapObjectId.Trees26,
  MapObjectId.Trees3,
  MapObjectId.Trees4,
  MapObjectId.Trees1,
  MapObjectId.Trees2,
  MapObjectId.Trees5,
  MapObjectId.Trees6,
];

const trees2Objects = [
  MapObjectId.Trees17,
  MapObjectId.Trees18,
  MapObjectId.Trees15,
  MapObjectId.Trees16,
  MapObjectId.Trees19,
  MapObjectId.Trees20,
];

const snowTreesObjects = [
  MapObjectId.Trees9,
  MapObjectId.Trees10,
  MapObjectId.Trees7,
  MapObjectId.Trees8,
  MapObjectId.Trees11,
  MapObjectId.Trees12,
  MapObjectId.Trees13,
  MapObjectId.Trees14,
];

const desertTreesObjects = [
  MapObjectId.Trees27,
  MapObjectId.Trees28,
  MapObjectId.Trees29,
];

const mineObjects = [
  MapObjectId.OreMine,
  MapObjectId.SulfurMine,
  MapObjectId.CrystalMine,
  MapObjectId.GemsMine,
  MapObjectId.GoldMine,
];

const lakeObjects = [
  MapObjectId.GrassLakeBig,
  MapObjectId.GrassLake,
  MapObjectId.SnowLakeSmall,
  MapObjectId.SnowLake,
  MapObjectId.SnowLakeBig,
  MapObjectId.SwampLakeBig,
  MapObjectId.SwampLake,
  MapObjectId.DirtLakeBig,
  MapObjectId.DirtLake,
];

const riverObjects = [
  MapObjectId.River1,
  MapObjectId.River2,
  MapObjectId.River3,
  MapObjectId.River4,
  MapObjectId.River5,
  MapObjectId.River6,
  MapObjectId.River7,
  MapObjectId.River8,
  MapObjectId.River9,
];

const objectOrder: string[] = [
  ...mountainObjects,
  ...grassMountainObjects,
  ...snowMountainObjects,
  ...swampMountainObjects,
  ...desertMountainObjects,
  ...dirtMountainObjects,
  ...treesObjects,
  ...snowTreesObjects,
  ...desertTreesObjects,
  ...trees2Objects,
  MapObjectId.Alchemist,
  MapObjectId.DragonCity,
  MapObjectId.Lighthouse,
  ...mineObjects,
  MapObjectId.Sawmill,
  MapObjectId.Signpost, // order changes
  MapObjectId.Fireplace2,
  MapObjectId.Grass1,
  MapObjectId.Grass2,
  MapObjectId.Swamp1,
  MapObjectId.Dirt1,
  MapObjectId.Dirt2,
  MapObjectId.Cave,
  MapObjectId.FaerieRing,
  MapObjectId.Grass3,
  MapObjectId.Grass4,
  MapObjectId.Swamp4,
  MapObjectId.Swamp2,
  MapObjectId.Dirt3,
  MapObjectId.Dirt4,
  MapObjectId.Dirt5,
  MapObjectId.Gazebo,
  MapObjectId.Hut,
  MapObjectId.ThatchedHut,
  MapObjectId.Cottage,
  ...lakeObjects,
  MapObjectId.Shrine,
  MapObjectId.Grass5,
  MapObjectId.Grass6,
  MapObjectId.Swamp5,
  MapObjectId.Lava1,
  MapObjectId.Lava2,
  MapObjectId.Lava3,
  MapObjectId.Lava5,
  MapObjectId.Lava6,
  MapObjectId.Lava4,
  MapObjectId.Skeleton,
  MapObjectId.Desert1,
  MapObjectId.Desert2,
  MapObjectId.Oasis,
  MapObjectId.Dirt6,
  MapObjectId.Dirt7,
  MapObjectId.Obelisk,
  MapObjectId.Grass7,
  MapObjectId.Grass8,
  MapObjectId.Grass9,
  MapObjectId.Grass10,
  MapObjectId.Snow1,
  MapObjectId.Snow2,
  MapObjectId.Snow3,
  MapObjectId.Lava10,
  MapObjectId.Lava7,
  MapObjectId.Lava8,
  MapObjectId.Lava9,
  MapObjectId.Desert3,
  MapObjectId.DesertTent,
  MapObjectId.Dirt8,
  MapObjectId.Dirt9,
  MapObjectId.Dirt10,
  MapObjectId.Dirt11,
  MapObjectId.Rosebush,
  MapObjectId.Shrine2,
  MapObjectId.Swamp3,
  MapObjectId.OakTree,
  MapObjectId.TravelGate2,
  MapObjectId.Fountain,
  MapObjectId.Graveyard,
  MapObjectId.Hole,
  MapObjectId.Waterwheel,
  MapObjectId.Statue,
  MapObjectId.Bouy,
  MapObjectId.Water3,
  MapObjectId.Water1,
  MapObjectId.Water2,
  MapObjectId.Shipwreck,
  MapObjectId.Whirlpool,
  ...riverObjects,
  MapObjectId.TreeStump,
  MapObjectId.TravelGate,
  MapObjectId.WagonCamp,
  MapObjectId.Windmill,
];

const randomObjects: string[] = [
  MapObjectId.RandomArtifact,
  MapObjectId.RandomCastle,
  MapObjectId.RandomCreature,
  MapObjectId.RandomHero,
  MapObjectId.RandomMine,
  MapObjectId.RandomResource,
  MapObjectId.RandomTown,
];

const treasures: string[] = [
  MapObjectId.Fireplace,
  MapObjectId.TreasureChest,
  MapObjectId.Lamp,
];

const isStaticObject = (objectData: MapObjectData, data: GameData): boolean =>
  !isCreatureMapObjectData(objectData) &&
  !isArtifactMapObjectData(objectData) &&
  !isResourceMapObjectData(objectData, data) &&
  !randomObjects.includes(objectData.id) &&
  !treasures.includes(objectData.id);

const getTerrainObjects = (data: GameData, terrain: TerrainType): string[] =>
  Object.values(data.mapObjects)
    .filter((o) => isStaticObject(o, data))
    .filter((o) => isTerrainRestrictedMapObjectData(o) && o.restrictedTerrains.includes(terrain))
    .sort((a, b) => objectOrder.indexOf(a.id) - objectOrder.indexOf(b.id))
    .map((o) => o.id);

export const getObjects = (type: EditorObjectType, data: GameData): string[] => {
  switch (type) {
    case EditorObjectType.WaterObjects:
      return getTerrainObjects(data, TerrainType.Water);
    case EditorObjectType.GrassObjects:
      return getTerrainObjects(data, TerrainType.Grass);
    case EditorObjectType.SnowObjects:
      return getTerrainObjects(data, TerrainType.Snow);
    case EditorObjectType.SwampObjects:
      return getTerrainObjects(data, TerrainType.Swamp);
    case EditorObjectType.LavaObjects:
      return getTerrainObjects(data, TerrainType.Lava);
    case EditorObjectType.DesertObjects:
      return getTerrainObjects(data, TerrainType.Desert);
    case EditorObjectType.DirtObjects:
      return getTerrainObjects(data, TerrainType.Dirt);
    case EditorObjectType.Towns:
      const townObjects: string[] = [
        MapObjectId.RandomCastle,
        MapObjectId.RandomTown,
      ];

      // TODO: add town objects
      return Object.values(data.mapObjects)
        .filter((o) => townObjects.includes(o.id))
        .sort((a, b) => townObjects.indexOf(a.id) - townObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Monsters:
      const creatureObjects: string[] = [
        ...Object.values(data.mapObjects)
          .filter(isCreatureMapObjectData)
          .map((o) => o.id),
        MapObjectId.RandomCreature,
        MapObjectId.RandomHero,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => creatureObjects.includes(o.id))
        .sort((a, b) => creatureObjects.indexOf(a.id) - creatureObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Artifacts:
      // TODO: fix artifact order
      const artifactObjects: string[] = [
        ...Object.values(data.mapObjects)
          .filter(isArtifactMapObjectData)
          .map((o) => o.id),
        MapObjectId.RandomArtifact,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => artifactObjects.includes(o.id))
        .sort((a, b) => artifactObjects.indexOf(a.id) - artifactObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Treasures:
      const treasureObjects: string[] = [
        // FIXME: creating object and order
        ...Object.values(data.mapObjects)
          .filter((o) => isResourceMapObject({ id: "", dataId: o.id }, data))
          .map((o) => o.id),
        MapObjectId.RandomResource,
        ...treasures,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => treasureObjects.includes(o.id))
        .sort((a, b) => treasureObjects.indexOf(a.id) - treasureObjects.indexOf(b.id))
        .map((o) => o.id);
    default:
      return [];
  }
};
