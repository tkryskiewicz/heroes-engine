import { connect } from "react-redux";
import { Dispatch } from "redux";

import { HeroClassIds, TownIds } from "heroes-homm1";
import { AppState, closeKingdomOverviewWindow } from "heroes-homm1-state";

import {
  HeroClassSummary,
  KingdomOverviewWindow,
  KingdomOverviewWindowProps,
  TownSummary,
} from "./KingdomOverviewWindow";

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
  castles: TownIds.reduce<TownSummary>((p, c) => {
    p[c] = state.game.towns.filter((t) => t.id === c && t.isCastleBuilt).length;

    return p;
  }, {}),
  goldPerDay: 0,
  heroClasses: HeroClassIds.reduce<HeroClassSummary>((p, c) => {
    p[c] = state.game.heroes.filter((h) => h.heroClass === c).length;

    return p;
  }, {}),
  // TODO: implement mine count
  mines: {},
  resources: state.game.resources,
  towns: TownIds.reduce<TownSummary>((p, c) => {
    p[c] = state.game.towns.filter((t) => t.id === c && !t.isCastleBuilt).length;

    return p;
  }, {}),
});

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<KingdomOverviewWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closeKingdomOverviewWindow());
  },
});

export const KingdomOverviewWindowConnected = connect(mapStateToProps, mapDispatchToProps)(KingdomOverviewWindow);
