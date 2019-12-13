import React from "react";

import {
  GameData,
  GameObject,
  GameObjectData,
  isCreatureObjectData,
  isItemObjectData,
  isStructureBuilt,
} from "heroes-core";
import {
  isHeroObject,
  isMineObject,
  isMineObjectData,
  isRandomCreatureObjectData,
  isResourceObject,
  isTownObject,
  isVariantObjectData,
  ObjectId,
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
  object: GameObject,
  objectData: GameObjectData,
  terrain: string | undefined,
  data: GameData,
  size: "small" | "large",
): React.ReactNode => {
  // FIXME: ??
  const variant = terrain && isVariantObjectData(objectData) ?
    objectData.variants[terrain] :
    "";

  if (isResourceObject(object, data)) {
    return (
      <ResourceMapObject
        size={size}
        resource={objectData.id}
      />
    );
  }

  if (isCreatureObjectData(objectData)) {
    return (
      <CreatureMapObject
        size={size}
        creature={objectData.creature}
      />
    );
  }

  if (isItemObjectData(objectData)) {
    return (
      <ArtifactMapObject
        size={size}
        artifact={objectData.item}
      />
    );
  }

  if (objectData.id === ObjectId.RandomTown || objectData.id === ObjectId.RandomCastle) {
    return (
      <MapObj
        size={size}
        type="random-town"
        variant={objectData.id === ObjectId.RandomCastle ? "castle" : "town"}
      />
    );
  }

  if (isMineObjectData(objectData, data) && isMineObject(object, data)) {
    return (
      <MineMapObject
        size={size}
        resource={objectData.resourceGenerator.resource}
        variant={variant}
        playerColor={object.owner}
      />
    );
  }

  if (isHeroObject(object)) {
    // FIXME: ??
    const style: React.CSSProperties = {
      left: -9,
      position: "relative",
      top: -1,
    };

    return (
      <div style={style}>
        <HeroMapObject
          heroClass={object.heroClass}
          playerColor={object.owner}
          orientation={object.orientation}
        />
      </div>
    );
  }

  if (isTownObject(object)) {
    return (
      <TownMapObject
        size="large"
        town={object.id}
        isCastleBuilt={isStructureBuilt(object, StructureId.Castle)}
        playerColor={object.owner}
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
  object: GameObject,
  objectData: GameObjectData,
  terrain: string | undefined,
  data: GameData,
  size: "small" | "large",
) => {
  if (isRandomCreatureObjectData(objectData)) {
    return (
      <RandomCreatureMapObject
        size={size}
        level={objectData.randomCreature.level}
      />
    );
  }

  if (isHeroObject(object)) {
    return (
      <MapObj
        size={size}
        type={ObjectId.RandomHero}
      />
    );
  }

  return renderObject(object, objectData, terrain, data, size);
};
