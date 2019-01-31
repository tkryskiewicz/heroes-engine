import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameTown } from "heroes-core";
import { AppState, townWindowActions } from "heroes-homm1-state";

import { CastleOptionsWindow, CastleOptionsWindowProps } from "./CastleOptionsWindow";

type StateProp =
  "canConstructStructures" |
  "resources" |
  "options" |
  "visibleOptionDetails";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<CastleOptionsWindowProps, "town">,
): Pick<CastleOptionsWindowProps, StateProp> => {
  const town = getGameTown(state.game, ownProps.town)!;

  return {
    canConstructStructures: town.canConstructStructures,
    options: town.structures,
    resources: state.game.resources,
    visibleOptionDetails: state.townWindow.visibleOptionDetails,
  };
};

type DispatchProp =
  "onOpenOptionDetailsClick" |
  "onCloseOptionDetailsClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<CastleOptionsWindowProps, DispatchProp> => ({
  onOpenOptionDetailsClick(option: string) {
    dispatch(townWindowActions.openOptionDetails(option));
  },
  onCloseOptionDetailsClick() {
    dispatch(townWindowActions.closeOptionDetails());
  },
});

const CastleOptionsWindowConnected = connect(mapStateToProps, mapDispatchToProps)(CastleOptionsWindow);

export {
  CastleOptionsWindowConnected as CastleOptionsWindow,
  CastleOptionsWindowProps,
};
