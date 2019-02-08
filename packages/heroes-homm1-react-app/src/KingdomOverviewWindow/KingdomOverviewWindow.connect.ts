import { connect } from "react-redux";
import { Dispatch } from "redux";

import { isStructureBuilt } from "heroes-core";
import { HeroClassIds, StructureId, TownIds } from "heroes-homm1";
import { KingdomOverviewWindow, KingdomOverviewWindowProps } from "heroes-homm1-react";
import { AppState, kingdomOverviewWindowActions } from "heroes-homm1-state";

type StateProp =
  "alignment" |
  "heroClasses" |
  "castles" |
  "towns" |
  "mines" |
  "resources" |
  "goldPerDay";

const mapStateToProps = (state: AppState): Pick<KingdomOverviewWindowProps, StateProp> => ({
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

const mapDispatchToProps = (dispatch: Dispatch): Pick<KingdomOverviewWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(kingdomOverviewWindowActions.close());
  },
});

const KingdomOverviewWindowConnected = connect(mapStateToProps, mapDispatchToProps)(KingdomOverviewWindow);

type KingdomOverviewWindowConnectedProps = ExtractProps<typeof KingdomOverviewWindowConnected>;

export {
  KingdomOverviewWindowConnected as KingdomOverviewWindow,
  KingdomOverviewWindowConnectedProps as KingdomOverviewWindowProps,
};