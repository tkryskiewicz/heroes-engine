import * as React from "react";

import {
  GameData,
  isArtifactMapObjectData,
  isCreatureMapObjectData,
  isStructureBuilt,
  MapObject,
  MapObjectData,
} from "heroes-core";
import {
  isHeroMapObject,
  isMineMapObject,
  isMineMapObjectData,
  isRandomCreatureMapObjectData,
  isResourceMapObject,
  isTownMapObject,
  isVariantMapObjectData,
  MapObjectId,
  StructureId,
} from "heroes-homm1";
import {
  ArtifactMapObject,
  CreatureMapObject,
  HeroMapObject,
  MapObject as MapObj,
  MineMapObject,
  RandomCreatureMapObject,
  ResourceMapObject,
  TownMapObject,
} from "heroes-homm1-react";

export const renderObject = (
  object: MapObject,
  objectData: MapObjectData,
  terrain: string | undefined,
  data: GameData,
  size: "small" | "large",
): React.ReactNode => {
  // FIXME: ??
  const variant = terrain && isVariantMapObjectData(objectData) ?
    objectData.variants[terrain] :
    "";

  if (isResourceMapObject(object, data)) {
    return (
      <ResourceMapObject
        size={size}
        resource={objectData.id}
      />
    );
  }

  if (isCreatureMapObjectData(objectData)) {
    return (
      <CreatureMapObject
        size={size}
        creature={objectData.creature}
      />
    );
  }

  if (isArtifactMapObjectData(objectData)) {
    return (
      <ArtifactMapObject
        size={size}
        artifact={objectData.artifact}
      />
    );
  }

  if (objectData.id === MapObjectId.RandomTown || objectData.id === MapObjectId.RandomCastle) {
    return (
      <MapObj
        size={size}
        type="random-town"
        variant={objectData.id === MapObjectId.RandomCastle ? "castle" : "town"}
      />
    );
  }

  if (isMineMapObjectData(objectData, data) && isMineMapObject(object, data)) {
    return (
      <MineMapObject
        size={size}
        resource={objectData.resourceGenerator.resource}
        variant={variant}
        alignment={object.owner}
      />
    );
  }

  if (isHeroMapObject(object)) {
    return (
      <HeroMapObject
        heroClass={object.heroClass}
        alignment={object.owner}
        orientation={object.orientation}
      />
    );
  }

  if (isTownMapObject(object)) {
    return (
      <TownMapObject
        size="large"
        town={object.id}
        isCastleBuilt={isStructureBuilt(object, StructureId.Castle)}
        alignment={object.owner}
      />
    );
  }

  return (
    <MapObj
      size={size}
      type={objectData.id}
      variant={variant}
    />
  );
};

export const renderEditorObject = (
  object: MapObject,
  objectData: MapObjectData,
  terrain: string | undefined,
  data: GameData,
  size: "small" | "large",
) => {
  if (isRandomCreatureMapObjectData(objectData)) {
    return (
      <RandomCreatureMapObject
        size={size}
        level={objectData.randomCreature.level}
      />
    );
  }

  if (isHeroMapObject(object)) {
    return (
      <MapObj
        size={size}
        type={MapObjectId.RandomHero}
      />
    );
  }

  return renderObject(object, objectData, terrain, data, size);
};
