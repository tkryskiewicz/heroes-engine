import * as React from "react";

import { GameData, isArtifactMapObjectData, isCreatureMapObjectData, MapObjectData } from "heroes-core";
import { EditorObjectType, isResourceMapObject, MapObjectId } from "heroes-homm1";
import {
  ArtifactMapObject,
  CreatureMapObject,
  MapObject,
  RandomTownMapObject,
  ResourceMapObject,
} from "heroes-homm1-react";

export const renderObject = (
  objectData: MapObjectData,
  data: GameData,
): React.ReactNode => {
  // FIXME
  if (isResourceMapObject({ id: "", dataId: objectData.id }, data)) {
    return (
      <ResourceMapObject
        size="small"
        resource={objectData.id}
      />
    );
  }

  if (isCreatureMapObjectData(objectData)) {
    return (
      <CreatureMapObject
        size="small"
        creature={objectData.creature}
      />
    );
  }

  if (isArtifactMapObjectData(objectData)) {
    return (
      <ArtifactMapObject
        size="small"
        artifact={objectData.artifact}
      />
    );
  }

  if (objectData.id === MapObjectId.RandomTown || objectData.id === MapObjectId.RandomCastle) {
    return (
      <RandomTownMapObject
        size="small"
        isCastleBuilt={objectData.id === MapObjectId.RandomCastle}
      />
    );
  }

  return (
    <MapObject
      size="small"
      type={objectData.id}
    />
  );
};

export const getObjects = (type: EditorObjectType, data: GameData): string[] => {
  const mountainObjects = [
    MapObjectId.Mountain1,
    MapObjectId.Mountain2,
    MapObjectId.Mountain3,
    MapObjectId.Mountain4,
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

  switch (type) {
    case EditorObjectType.WaterObjects:
      const waterObjects: string[] = [
        MapObjectId.Bouy,
        MapObjectId.Water3,
        MapObjectId.Water1,
        MapObjectId.Water2,
        MapObjectId.Shipwreck,
        MapObjectId.Whirlpool,
        MapObjectId.River8,
        MapObjectId.River9,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => waterObjects.indexOf(o.id) !== -1)
        .sort((a, b) => waterObjects.indexOf(a.id) - waterObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.GrassObjects:
      const grassObjects: string[] = [
        ...mountainObjects,
        MapObjectId.Mountain9,
        MapObjectId.Mountain10,
        MapObjectId.Mountain11,
        MapObjectId.Mountain12,
        ...treesObjects,
        ...trees2Objects,
        MapObjectId.Signpost,
        MapObjectId.Grass1,
        MapObjectId.Grass2,
        MapObjectId.FaerieRing,
        MapObjectId.Grass3,
        MapObjectId.Grass4,
        MapObjectId.Gazebo,
        MapObjectId.Hut,
        MapObjectId.ThatchedHut,
        MapObjectId.Cottage,
        MapObjectId.GrassLakeBig,
        MapObjectId.GrassLake,
        MapObjectId.Shrine,
        MapObjectId.Grass5,
        MapObjectId.Grass6,
        MapObjectId.Obelisk,
        MapObjectId.Grass7,
        MapObjectId.Grass8,
        MapObjectId.Grass9,
        MapObjectId.Grass10,
        MapObjectId.Rosebush,
        MapObjectId.Shrine2,
        MapObjectId.OakTree,
        MapObjectId.Fountain,
        MapObjectId.Graveyard,
        MapObjectId.Hole,
        MapObjectId.Waterwheel,
        MapObjectId.Statue,
        ...riverObjects,
        MapObjectId.TreeStump,
        MapObjectId.TravelGate,
        MapObjectId.WagonCamp,
        MapObjectId.Windmill,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => grassObjects.indexOf(o.id) !== -1)
        .sort((a, b) => grassObjects.indexOf(a.id) - grassObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.SnowObjects:
      const snowObjects: string[] = [
        ...mountainObjects,
        MapObjectId.Mountain21,
        MapObjectId.Mountain22,
        MapObjectId.Mountain23,
        MapObjectId.Mountain24,
        ...treesObjects,
        MapObjectId.Trees9,
        MapObjectId.Trees10,
        MapObjectId.Trees7,
        MapObjectId.Trees8,
        MapObjectId.Trees11,
        MapObjectId.Trees12,
        MapObjectId.Trees13,
        MapObjectId.Trees14,
        ...trees2Objects,
        MapObjectId.Signpost,
        MapObjectId.Fireplace,
        MapObjectId.ThatchedHut,
        MapObjectId.Cottage,
        MapObjectId.SnowLakeSmall,
        MapObjectId.SnowLake,
        MapObjectId.SnowLakeBig,
        MapObjectId.Obelisk,
        MapObjectId.Snow1,
        MapObjectId.Snow2,
        MapObjectId.Snow3,
        MapObjectId.TravelGate,
        MapObjectId.Fountain,
        ...riverObjects,
        MapObjectId.WagonCamp,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => snowObjects.indexOf(o.id) !== -1)
        .sort((a, b) => snowObjects.indexOf(a.id) - snowObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.SwampObjects:
      const swampObjects: string[] = [
        ...mountainObjects,
        MapObjectId.Mountain17,
        MapObjectId.Mountain18,
        MapObjectId.Mountain19,
        MapObjectId.Mountain20,
        ...treesObjects,
        ...trees2Objects,
        MapObjectId.Cave,
        MapObjectId.FaerieRing,
        MapObjectId.Swamp1,
        MapObjectId.Swamp4,
        MapObjectId.Swamp2,
        MapObjectId.SwampLakeBig,
        MapObjectId.SwampLake,
        MapObjectId.Swamp5,
        MapObjectId.Obelisk,
        MapObjectId.Shrine2,
        MapObjectId.Swamp3,
        MapObjectId.OakTree,
        MapObjectId.Signpost,
        MapObjectId.Fountain,
        MapObjectId.Graveyard,
        MapObjectId.Hole,
        MapObjectId.Statue,
        ...riverObjects,
        MapObjectId.TreeStump,
        MapObjectId.TravelGate,
        MapObjectId.WagonCamp,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => swampObjects.indexOf(o.id) !== -1)
        .sort((a, b) => swampObjects.indexOf(a.id) - swampObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.LavaObjects:
      const lavaObjects: string[] = [
        ...mountainObjects,
        ...treesObjects,
        ...trees2Objects,
        MapObjectId.Lava1,
        MapObjectId.Lava2,
        MapObjectId.Lava3,
        MapObjectId.Lava5,
        MapObjectId.Lava6,
        MapObjectId.Lava4,
        MapObjectId.Obelisk,
        MapObjectId.Lava10,
        MapObjectId.Lava7,
        MapObjectId.Lava8,
        MapObjectId.Lava9,
        ...riverObjects,
        MapObjectId.TravelGate,
        MapObjectId.WagonCamp,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => lavaObjects.indexOf(o.id) !== -1)
        .sort((a, b) => lavaObjects.indexOf(a.id) - lavaObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.DesertObjects:
      const desertObjects: string[] = [
        ...mountainObjects,
        MapObjectId.Mountain13,
        MapObjectId.Mountain14,
        MapObjectId.Mountain15,
        MapObjectId.Mountain16,
        ...treesObjects,
        MapObjectId.Trees27,
        MapObjectId.Trees28,
        MapObjectId.Trees29,
        ...trees2Objects,
        MapObjectId.Signpost,
        MapObjectId.Cave,
        MapObjectId.Skeleton,
        MapObjectId.Desert1,
        MapObjectId.Desert2,
        MapObjectId.Oasis,
        MapObjectId.Obelisk,
        MapObjectId.Desert3,
        MapObjectId.DesertTent,
        MapObjectId.TravelGate,
        ...riverObjects,
        MapObjectId.WagonCamp,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => desertObjects.indexOf(o.id) !== -1)
        .sort((a, b) => desertObjects.indexOf(a.id) - desertObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.DirtObjects:
      const dirtObjects: string[] = [
        ...mountainObjects,
        MapObjectId.Mountain5,
        MapObjectId.Mountain6,
        MapObjectId.Mountain7,
        MapObjectId.Mountain8,
        ...treesObjects,
        ...trees2Objects,
        MapObjectId.Dirt1,
        MapObjectId.Dirt2,
        MapObjectId.FaerieRing,
        MapObjectId.Dirt3,
        MapObjectId.Dirt4,
        MapObjectId.Dirt5,
        MapObjectId.Gazebo,
        MapObjectId.DirtLakeBig,
        MapObjectId.DirtLake,
        MapObjectId.Shrine,
        MapObjectId.Dirt6,
        MapObjectId.Dirt7,
        MapObjectId.Obelisk,
        MapObjectId.Dirt8,
        MapObjectId.Dirt9,
        MapObjectId.Dirt10,
        MapObjectId.Dirt11,
        MapObjectId.Rosebush,
        MapObjectId.Shrine2,
        MapObjectId.Signpost,
        MapObjectId.Fountain,
        MapObjectId.Graveyard,
        MapObjectId.Hole,
        MapObjectId.Waterwheel,
        MapObjectId.Statue,
        ...riverObjects,
        MapObjectId.TreeStump,
        MapObjectId.TravelGate,
        MapObjectId.WagonCamp,
        MapObjectId.Windmill,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => dirtObjects.indexOf(o.id) !== -1)
        .sort((a, b) => dirtObjects.indexOf(a.id) - dirtObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Towns:
      const townObjects: string[] = [
        MapObjectId.RandomCastle,
        MapObjectId.RandomTown,
      ];

      // TODO: add town objects
      return Object.values(data.mapObjects)
        .filter((o) => townObjects.indexOf(o.id) !== -1)
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
        .filter((o) => creatureObjects.indexOf(o.id) !== -1)
        .sort((a, b) => creatureObjects.indexOf(a.id) - creatureObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Artifacts:
      // TODO: fix order
      const artifactObjects: string[] = [
        ...Object.values(data.mapObjects)
          .filter(isArtifactMapObjectData)
          .map((o) => o.id),
        MapObjectId.RandomArtifact,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => artifactObjects.indexOf(o.id) !== -1)
        .sort((a, b) => artifactObjects.indexOf(a.id) - artifactObjects.indexOf(b.id))
        .map((o) => o.id);
    case EditorObjectType.Treasures:
      const treasureObjects: string[] = [
        // FIXME: creating object and order
        ...Object.values(data.mapObjects)
          .filter((o) => isResourceMapObject({ id: "", dataId: o.id }, data))
          .map((o) => o.id),
        MapObjectId.RandomResource,
        MapObjectId.TreasureChest,
        MapObjectId.Fireplace,
        MapObjectId.Lamp,
      ];

      return Object.values(data.mapObjects)
        .filter((o) => treasureObjects.indexOf(o.id) !== -1)
        .sort((a, b) => treasureObjects.indexOf(a.id) - treasureObjects.indexOf(b.id))
        .map((o) => o.id);
    default:
      return [];
  }
};
