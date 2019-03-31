import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  isHeroMapObject,
  isMineMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isStructureBuilt,
  isTownMapObject,
} from "heroes-core";
import { getResourceMineMapObjectId, HeroClassIds, Resource, StructureId, TownIds } from "heroes-homm1";
import { AppState, kingdomOverviewWindowActions } from "heroes-homm1-state";

import { KingdomOverviewWindowContainer, KingdomOverviewWindowContainerProps } from "./KingdomOverviewWindowContainer";

type StateProp =
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
    .filter(isHeroMapObject)
    .map((o) => o.hero);

  const towns = ownedObjects
    .filter(isTownMapObject)
    .map((o) => o.town);

  const mines = ownedObjects
    .filter((o) => {
      const objectData = state.game.data.mapObjects[o.id];

      return objectData && isMineMapObjectData(objectData);
    });

  return {
    alignment: state.game.alignment,
    castles: TownIds.reduce((p, c) => ({
      ...p,
      [c]: towns.filter((t) => t.id === c && isStructureBuilt(t, StructureId.Castle)).length,
    }), {}),
    goldPerDay: 0,
    heroClasses: HeroClassIds.reduce((p, c) => ({
      ...p,
      [c]: heroes.filter((h) => h.heroClass === c).length,
    }), {}),
    mines: Object.values(Resource).reduce((p, c) => ({
      ...p,
      [c]: mines.filter((m) => m.id === getResourceMineMapObjectId(c)).length,
    }), {}),
    resources: state.game.resources,
    towns: TownIds.reduce((p, c) => ({
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
