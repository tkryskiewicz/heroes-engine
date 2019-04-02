import * as React from "react";

import {
  getVisitor,
  Hero,
  isArtifactMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isHeroMapObject,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isResourceGeneratorMapObjectData,
  isStructureBuilt,
  isTownMapObject,
  isTreasureMapObject,
  MapObject,
  MapObjectData,
  Town,
  wasVisitedBy,
} from "heroes-core";
import { MapObjectId, StructureId } from "heroes-homm1";
import {
  ArtifactMapObject,
  CreatureJoinPrompt,
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
import { Dispatch } from "redux";

export const renderMapObject = (object: MapObject, objectData: MapObjectData) => {
  if (isHeroMapObject(object)) {
    return (
      <HeroMapObject
        heroClass={object.hero.heroClass}
        alignment={object.owner}
        orientation={object.orientation}
      />
    );
  }

  if (isTownMapObject(object)) {
    return (
      <TownMapObject
        town={object.town.id}
        isCastleBuilt={isStructureBuilt(object.town, StructureId.Castle)}
        alignment={object.owner}
      />
    );
  }

  if (isTreasureMapObject(object)) {
    // TODO: handle multiple resources
    const resource = Object.keys(object.treasure)[0];

    return (
      <ResourceMapObject
        resource={resource}
      />
    );
  }

  if (isResourceGeneratorMapObjectData(objectData) && isOwnableMapObject(object)) {
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
  alignment: string,
  object: MapObject,
  objectData: MapObjectData,
  hero: Hero | undefined,
  props: {
    readonly onConfirmClick: () => void;
    readonly onCloseClick: () => void;
  },
) => {
  if (hero && isLimitedInteractionMapObjectData(objectData) && isLimitedInteractionMapObject(object)) {
    const visitor = getVisitor(objectData, alignment, hero.id);

    if (object.dataId === MapObjectId.Obelisk) {
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
  }

  if (isResourceGeneratorMapObjectData(objectData)) {
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
  dispatch: Dispatch,
) => {
  // FIXME: extract
  if (isHeroMapObject(object)) {
    const heroIndex = heroes.indexOf(object.hero);

    if (!activeHero) {
      dispatch(locatorsActions.selectLocator({ type: LocatorType.Hero, index: heroIndex }));
    } else if (activeHero && object.hero !== activeHero) {
      dispatch(adventureScreenActions.openHeroTradingWindow(activeHero.id, object.hero.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isTownMapObject(object)) {
    const townIndex = towns.indexOf(object.town);

    if (activeHero || object.town !== activeTown) {
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
  } else if (isResourceGeneratorMapObjectData(objectData) && isOwnableMapObject(object)) {
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