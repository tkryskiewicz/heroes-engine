import * as React from "react";
import { Dispatch } from "redux";

import {
  GameData,
  getVisitor,
  Hero,
  isArtifactMapObjectData,
  isCreatureMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isObjectOwnedBy,
  isStructureBuilt,
  isTreasureMapObject,
  MapObject,
  MapObjectData,
  Town,
  wasVisitedBy,
} from "heroes-core";
import {
  isHeroMapObject,
  isMineMapObject,
  isMineMapObjectData,
  isObeliskMapObject,
  isObeliskMapObjectData,
  isResourceMapObject,
  isTownMapObject,
  StructureId,
} from "heroes-homm1";
import {
  ArtifactMapObject,
  CreatureJoinPrompt,
  CreatureMapObject,
  DwellingEmptyPrompt,
  HeroMapObject,
  MapObject as MapObj,
  MineMapObject,
  ObeliskAlreadyVisitedPrompt,
  ResourceMapObject,
  TownMapObject,
  VisitMinePrompt,
  VisitObeliskPrompt,
} from "heroes-homm1-react";
import { adventureScreenActions, gameActions, locatorsActions, LocatorType } from "heroes-homm1-state";

export const renderMapObject = (object: MapObject, objectData: MapObjectData, data: GameData) => {
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
        town={object.id}
        isCastleBuilt={isStructureBuilt(object, StructureId.Castle)}
        alignment={object.owner}
      />
    );
  }

  if (isCreatureMapObjectData(objectData)) {
    return (
      <CreatureMapObject
        creature={objectData.creature}
      />
    );
  }

  if (isResourceMapObject(object, data)) {
    // TODO: handle multiple resources or refactor data to be only one resource
    const resource = Object.keys(object.treasure)[0];

    return (
      <ResourceMapObject
        resource={resource}
      />
    );
  }

  if (isMineMapObject(object, data) && isMineMapObjectData(objectData, data)) {
    return (
      <MineMapObject
        resource={objectData.resourceGenerator.resource}
        alignment={object.owner}
      />
    );
  }

  if (isArtifactMapObjectData(objectData)) {
    return (
      <ArtifactMapObject
        artifact={objectData.artifact}
      />
    );
  }

  return (
    <MapObj
      type={object.dataId}
    />
  );
};

export const renderMapObjectDetails = (
  object: MapObject,
  objectData: MapObjectData,
  activeObject: Hero | undefined,
  data: GameData,
  props: {
    readonly onConfirmClick: () => void;
    readonly onCloseClick: () => void;
  },
) => {
  if (activeObject && isObeliskMapObject(object) && isObeliskMapObjectData(objectData)) {
    const visitor = getVisitor(objectData, activeObject);

    if (wasVisitedBy(object, visitor)) {
      return (
        <ObeliskAlreadyVisitedPrompt
          visible={true}
          onConfirmClick={props.onCloseClick}
        />
      );
    }

    return (
      <VisitObeliskPrompt
        visible={true}
        onConfirmClick={props.onConfirmClick}
      />
    );
  }

  if (isMineMapObjectData(objectData, data)) {
    return (
      <VisitMinePrompt
        visible={true}
        resource={objectData.resourceGenerator.resource}
        mine={objectData.id}
        amount={objectData.resourceGenerator.amount}
        onConfirmClick={props.onConfirmClick}
      />
    );
  }

  if (isDwellingMapObjectData(objectData) && isDwellingMapObject(object)) {
    if (object.availableCount === 0) {
      return (
        <DwellingEmptyPrompt
          visible={true}
          dwelling={object.id}
          creature={objectData.dwelling.creature}
          onConfirmClick={props.onCloseClick}
        />
      );
    } else {
      return (
        <CreatureJoinPrompt
          visible={true}
          creature={objectData.dwelling.creature}
          onConfirmClick={props.onConfirmClick}
          onCancelClick={props.onCloseClick}
        />
      );
    }
  }
};

export const onTileClick = (
  alignment: string,
  object: MapObject,
  objectData: MapObjectData,
  heroes: Hero[],
  activeHero: Hero | undefined,
  towns: Town[],
  activeTown: Town | undefined,
  data: GameData,
  dispatch: Dispatch,
) => {
  // FIXME: extract
  if (isHeroMapObject(object)) {
    const heroIndex = heroes.indexOf(object);

    if (!activeHero) {
      dispatch(locatorsActions.selectLocator({ type: LocatorType.Hero, index: heroIndex }));
    } else if (activeHero && object.id !== activeHero.id) {
      dispatch(adventureScreenActions.openHeroTradingWindow(activeHero.id, object.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isTownMapObject(object)) {
    const townIndex = towns.indexOf(object);

    if (activeHero || object !== activeTown) {
      dispatch(locatorsActions.selectLocator({ type: LocatorType.Town, index: townIndex }));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isDwellingMapObject(object)) {
    if (!activeHero) {
      return;
    }

    dispatch(adventureScreenActions.openMapObjectDetails(object.id));
  } else if (isTreasureMapObject(object)) {
    if (!activeHero) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeHero.id));
  } else if (isMineMapObject(object, data)) {
    if (!activeHero || isObjectOwnedBy(object, alignment)) {
      return;
    }

    dispatch(adventureScreenActions.openMapObjectDetails(object.id));
  } else if (isArtifactMapObjectData(objectData)) {
    if (!activeHero) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeHero.id));
  } else {
    if (!activeHero) {
      return;
    }

    dispatch(adventureScreenActions.openMapObjectDetails(object.id));
  }
};
