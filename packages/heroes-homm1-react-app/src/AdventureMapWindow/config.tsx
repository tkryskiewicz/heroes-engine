import React from "react";
import { Dispatch } from "redux";

import {
  Direction,
  GameData,
  GameObject,
  GameObjectData,
  getVisitor,
  isDwellingObject,
  isDwellingObjectData,
  isItemObjectData,
  isObjectOwnedBy,
  isOwnableObject,
  isOwnableObjectData,
  isTreasureObject,
  wasVisitedBy,
} from "heroes-core";
import {
  isHeroObject,
  isMineObject,
  isMineObjectData,
  isObeliskObject,
  isObeliskObjectData,
  isTownObject,
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

export const renderObjectDetails = (
  object: GameObject,
  objectData: GameObjectData,
  activeObject: GameObject | undefined,
  data: GameData,
  props: {
    readonly onConfirmClick: () => void;
    readonly onCloseClick: () => void;
  },
) => {
  if (activeObject && isOwnableObject(activeObject) && isObeliskObject(object) &&
    isObeliskObjectData(objectData)) {
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

  if (isMineObjectData(objectData, data)) {
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

  if (isDwellingObjectData(objectData) && isDwellingObject(object)) {
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
  activeObject: GameObject | undefined,
  dispatch: Dispatch,
) => {
  if (activeObject && isHeroObject(activeObject)) {
    switch (event.keyCode) {
      case 37:
        dispatch(gameActions.moveObject(activeObject.id, Direction.West));

        break;
      case 38:
        dispatch(gameActions.moveObject(activeObject.id, Direction.North));

        break;
      case 39:
        dispatch(gameActions.moveObject(activeObject.id, Direction.East));

        break;
      case 40:
        dispatch(gameActions.moveObject(activeObject.id, Direction.South));

        break;
    }
  }
};

export const onCellClick = (
  player: string,
  object: GameObject,
  objectData: GameObjectData,
  activeObject: GameObject | undefined,
  data: GameData,
  dispatch: Dispatch,
) => {
  if (isHeroObject(object)) {
    if (!activeObject || !isHeroObject(activeObject)) {
      dispatch(locatorsActions.selectActiveObject(object.id));

      dispatch(statusWindowActions.changeSelectedOption(StatusWindowOption.HeroStatus));
    } else if (isHeroObject(activeObject) && object.id !== activeObject.id) {
      dispatch(adventureWindowActions.openHeroTradingWindow(activeObject.id, object.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isTownObject(object)) {
    if (!activeObject || object.id !== activeObject.id) {
      dispatch(locatorsActions.selectActiveObject(object.id));
    } else {
      dispatch(locatorsActions.openLocatorDetails());
    }
  } else if (isDwellingObject(object)) {
    if (!activeObject || !isHeroObject(activeObject)) {
      return;
    }

    dispatch(adventureWindowActions.openObjectDetails(object.id));
  } else if (isTreasureObject(object)) {
    if (!activeObject || !isHeroObject(activeObject)) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeObject.id));
  } else if (isMineObject(object, data)) {
    if (!activeObject || !isHeroObject(activeObject) || isObjectOwnedBy(object, player)) {
      return;
    }

    dispatch(adventureWindowActions.openObjectDetails(object.id));
  } else if (isItemObjectData(objectData)) {
    if (!activeObject || !isHeroObject(activeObject)) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeObject.id));
  } else if (isOwnableObjectData(objectData)) {
    if (!activeObject || !isHeroObject(activeObject)) {
      return;
    }

    dispatch(gameActions.visitMapObject(object.id, activeObject.id));
  } else {
    if (!activeObject || !isHeroObject(activeObject)) {
      return;
    }

    dispatch(adventureWindowActions.openObjectDetails(object.id));
  }
};
