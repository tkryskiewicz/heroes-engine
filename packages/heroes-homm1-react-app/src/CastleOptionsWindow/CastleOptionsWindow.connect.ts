import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getGameTown } from "heroes-homm1";
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

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(CastleOptionsWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as CastleOptionsWindow,
  ComponentConnectedProps as CastleOptionsWindowProps,
};
