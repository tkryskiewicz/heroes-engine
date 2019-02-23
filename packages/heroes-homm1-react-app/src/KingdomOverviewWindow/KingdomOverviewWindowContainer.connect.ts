import { connect } from "react-redux";
import { Dispatch } from "redux";

import { isStructureBuilt } from "heroes-core";
import { HeroClassIds, StructureId, TownIds } from "heroes-homm1";
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

const mapStateToProps = (state: AppState): Pick<KingdomOverviewWindowContainerProps, StateProp> => ({
  alignment: state.game.alignment,
  castles: TownIds.reduce((p, c) => {
    return {
      ...p,
      [c]: state.game.towns.filter((t) => t.id === c && isStructureBuilt(t, StructureId.Castle)).length,
    };
  }, {}),
  goldPerDay: 0,
  heroClasses: HeroClassIds.reduce((p, c) => {
    return {
      ...p,
      [c]: state.game.heroes.filter((h) => h.heroClass === c).length,
    };
  }, {}),
  // TODO: implement mine count
  mines: {},
  resources: state.game.resources,
  towns: TownIds.reduce((p, c) => {
    return {
      ...p,
      [c]: state.game.towns.filter((t) => t.id === c && !isStructureBuilt(t, StructureId.Castle)).length,
    };
  }, {}),
});

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
