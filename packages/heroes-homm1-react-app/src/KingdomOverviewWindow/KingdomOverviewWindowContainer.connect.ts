import { connect } from "react-redux";

import {
  getDate,
  isObjectOwnedBy,
  isOwnableObject,
  isResourceGeneratorObjectData,
  isStructureBuilt,
} from "heroes-core";
import { isDefined } from "heroes-helpers";
import { isHeroObject, isTownObject, StructureId } from "heroes-homm1";
import { AppState } from "heroes-homm1-state";

import { KingdomOverviewWindowContainer, KingdomOverviewWindowContainerProps } from "./KingdomOverviewWindowContainer";

type StateProp =
  "data" |
  "date" |
  "playerColor" |
  "heroClasses" |
  "castles" |
  "towns" |
  "mines" |
  "resources" |
  "goldPerDay";

const mapStateToProps = (state: AppState): Pick<KingdomOverviewWindowContainerProps, StateProp> => {
  const ownedObjects = state.game.map.cells
    .map((c) => c.object)
    .filter(isDefined)
    .filter(isOwnableObject)
    .filter((o) => isObjectOwnedBy(o, state.game.activePlayer));

  const heroes = ownedObjects
    .filter(isHeroObject);

  const towns = ownedObjects
    .filter(isTownObject);

  const mines = ownedObjects
    .filter((o) => {
      const objectData = state.game.data.mapObjects[o.dataId];

      return isResourceGeneratorObjectData(objectData);
    });

  return {
    castles: Object.keys(state.game.data.towns).reduce((p, c) => ({
      ...p,
      [c]: towns.filter((t) => t.id === c && isStructureBuilt(t, StructureId.Castle)).length,
    }), {}),
    data: state.game.data,
    date: getDate(state.game.turn),
    goldPerDay: 0,
    heroClasses: Object.keys(state.game.data.heroClasses).reduce((p, c) => ({
      ...p,
      [c]: heroes.filter((h) => h.heroClass === c).length,
    }), {}),
    mines: Object.keys(state.game.data.resources).reduce((p, c) => ({
      ...p,
      [c]: mines.filter((m) => m.dataId === state.game.data.resources[c].mine).length,
    }), {}),
    playerColor: state.game.activePlayer,
    resources: state.game.resources,
    towns: Object.keys(state.game.data.towns).reduce((p, c) => ({
      ...p,
      [c]: towns.filter((t) => t.id === c && !isStructureBuilt(t, StructureId.Castle)).length,
    }), {}),
  };
};

const ContainerConnected = connect(mapStateToProps)(KingdomOverviewWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as KingdomOverviewWindow,
  ContainerConnectedProps as KingdomOverviewWindowProps,
};
