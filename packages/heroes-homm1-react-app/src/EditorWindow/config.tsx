import * as React from "react";

import { GameData, isArtifactMapObjectData, isCreatureMapObjectData, MapObjectData } from "heroes-core";
import { EditorObjectType, isResourceMapObject, MapObjectId } from "heroes-homm1";
import { ArtifactMapObject, CreatureMapObject, MapObject, ResourceMapObject } from "heroes-homm1-react";

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

  return (
    <MapObject
      type={objectData.id}
    />
  );
};

export const getObjects = (type: EditorObjectType, data: GameData): string[] => {
  switch (type) {
    case EditorObjectType.Monsters:
      return Object.values(data.mapObjects)
        .filter((o) => isCreatureMapObjectData(o) || o.id === MapObjectId.RandomCreature)
        .map((o) => o.id);
    case EditorObjectType.Artifacts:
      return Object.values(data.mapObjects)
        .filter((o) => isArtifactMapObjectData(o) || o.id === MapObjectId.RandomArtifact)
        .map((o) => o.id);
    case EditorObjectType.Treasures:
      const treasureObjects: string[] = [
        MapObjectId.RandomResource,
        // MapObjectId.TreasureChest,
        MapObjectId.Fireplace,
        // MapObjectId.GenieLamp,
      ];

      return Object.values(data.mapObjects)
        // FIXME
        .filter((o) => isResourceMapObject({ id: "", dataId: o.id }, data) || treasureObjects.indexOf(o.id) !== -1)
        .map((o) => o.id);
    default:
      return [];
  }
};
