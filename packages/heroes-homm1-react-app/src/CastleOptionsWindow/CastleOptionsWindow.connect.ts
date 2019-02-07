import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameTown } from "heroes-core";
import { CastleOptionsWindow, CastleOptionsWindowProps } from "heroes-homm1-react";
import { AppState, townWindowActions } from "heroes-homm1-state";
import { getOptionDetails } from "./config";

type StateProp =
  "canConstructStructures" |
  "resources" |
  "options" |
  "getOptionDetails" |
  "visibleOptionDetails";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<CastleOptionsWindowProps, "town">,
): Pick<CastleOptionsWindowProps, StateProp> => {
  const town = getGameTown(state.game, ownProps.town)!;

  return {
    canConstructStructures: town.canConstructStructures,
    getOptionDetails,
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

type CastleOptionsWindowConnectedProps = ExtractProps<typeof CastleOptionsWindowConnected>;

export {
  CastleOptionsWindowConnected as CastleOptionsWindow,
  CastleOptionsWindowConnectedProps as CastleOptionsWindowProps,
};
