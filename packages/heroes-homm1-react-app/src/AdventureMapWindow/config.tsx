import React from "react";
import { Dispatch } from "redux";

import {
  GameData,
  getVisitor,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isItemMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isTreasureMapObject,
  MapObject,
  MapObjectData,
  MapObjectOrientation,
  wasVisitedBy,
} from "heroes-core";
import {
  isHeroMapObject,
  isMineMapObject,
  isMineMapObjectData,
  isObeliskMapObject,
  isObeliskMapObjectData,
  isTownMapObject,
} from "heroes-homm1";
import {
  CreatureJoinPrompt,
  DwellingEmptyPrompt,
  ObeliskAlreadyVisitedPrompt,
  VisitMinePrompt,
  VisitObeliskPrompt,
} from "heroes-homm1-react";
import {
  adventureWindowActions,
  gameActions,
  locatorsActions,
  statusWindowActions,
  StatusWindowOption,
} from "heroes-homm1-state";

export const renderMapObjectDetails = (
  object: MapObject,
  objectData: MapObjectData,
  activeObject: MapObject | undefined,
  data: GameData,
  props: {
    readonly onConfirmClick: () => void;
    readonly onCloseClick: () => void;
  },
) => {
  if (activeObject && isOwnableMapObject(activeObject) && isObeliskMapObject(object) &&
    isObeliskMapObjectData(objectData)) {
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

export const onKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  activeObject: MapObject | undefined,
  dispatch: Dispatch,
) => {
  if (isHeroMapObject(activeObject)) {
    switch (event.keyCode) {
      case 37:
        dispatch(gameActions.moveObject(activeObject.id, MapObjectOrientation.West));

        break;
      case 38:
        dispatch(gameActions.moveObject(activeObject.id, MapObjectOrientation.North));

        break;
      case 39:
        dispatch(gameActions.moveObject(activeObject.id, MapObjectOrientation.East));

        break;
      case 40:
        dispatch(gameActions.moveObject(activeObject.id, MapObjectOrientation.South));

        break;
    }
  }
};

export const onCellClick = (
  player: string,
  object: MapObject,
  objectData: MapObjectData,
  activeObject: MapObject | undefined,
  data: GameData,
  dispatch: Dispatch,
) => {
  if (isHeroMapObject(object)) {
    if (!activeObject || !isHeroMapObject(activeObject)) {
      dispatch(locatorsActions.selectActiveObject(object.id));

      dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.HeroStatus));
    } else if (isHeroMapObject(activeObject) && object.id !== activeObject.id) {
      dispatch(adventureWindowActions.openHeroTradingWindow(activeObject.id, object.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isTownMapObject(object)) {
    if (!activeObject || object.id !== activeObject.id) {
      dispatch(locatorsActions.selectActiveObject(object.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isDwellingMapObject(object)) {
    if (!isHeroMapObject(activeObject)) {
      return;
    }

    dispatch(adventureWindowActions.openMapObjectDetails(object.id));
  } else if (isTreasureMapObject(object)) {
    if (!isHeroMapObject(activeObject)) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeObject.id));
  } else if (isMineMapObject(object, data)) {
    if (!isHeroMapObject(activeObject) || isObjectOwnedBy(object, player)) {
      return;
    }

    dispatch(adventureWindowActions.openMapObjectDetails(object.id));
  } else if (isItemMapObjectData(objectData)) {
    if (!isHeroMapObject(activeObject)) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeObject.id));
  } else {
    if (!isHeroMapObject(activeObject)) {
      return;
    }

    dispatch(adventureWindowActions.openMapObjectDetails(object.id));
  }
};
