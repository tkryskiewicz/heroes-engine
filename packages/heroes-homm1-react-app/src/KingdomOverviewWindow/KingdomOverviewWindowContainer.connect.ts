import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  getDate,
  isObjectOwnedBy,
  isOwnableMapObject,
  isResourceGeneratorMapObjectData,
  isStructureBuilt,
} from "heroes-core";
import { isHeroMapObject, isTownMapObject, StructureId } from "heroes-homm1";
import { AppState, kingdomOverviewWindowActions } from "heroes-homm1-state";

import { KingdomOverviewWindowContainer, KingdomOverviewWindowContainerProps } from "./KingdomOverviewWindowContainer";

type StateProp =
  "data" |
  "date" |
  "alignment" |
  "heroClasses" |
  "castles" |
  "towns" |
  "mines" |
  "resources" |
  "goldPerDay";

const mapStateToProps = (state: AppState): Pick<KingdomOverviewWindowContainerProps, StateProp> => {
  const ownedObjects = state.game.map.tiles
    .map((t) => t.object)
    .filter(isOwnableMapObject)
    .filter((o) => isObjectOwnedBy(o, state.game.alignment));

  const heroes = ownedObjects
    .filter(isHeroMapObject);

  const towns = ownedObjects
    .filter(isTownMapObject);

  const mines = ownedObjects
    .filter((o) => {
      const objectData = state.game.data.mapObjects[o.dataId];

      return isResourceGeneratorMapObjectData(objectData);
    });

  return {
    alignment: state.game.alignment,
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
    resources: state.game.resources,
    towns: Object.keys(state.game.data.towns).reduce((p, c) => ({
      ...p,
      [c]: towns.filter((t) => t.id === c && !isStructureBuilt(t, StructureId.Castle)).length,
    }), {}),
  };
};

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<KingdomOverviewWindowContainerProps, DispatchProp> => ({
  onExitClick() {
    dispatch(kingdomOverviewWindowActions.close());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(KingdomOverviewWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as KingdomOverviewWindow,
  ContainerConnectedProps as KingdomOverviewWindowProps,
};
