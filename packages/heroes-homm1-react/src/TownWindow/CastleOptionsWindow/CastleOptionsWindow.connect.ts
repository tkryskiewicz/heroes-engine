import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, townWindowActions } from "heroes-homm1-state";

import { CastleOptionsWindow, CastleOptionsWindowProps } from "./CastleOptionsWindow";

type StateProp =
  "visibleOptionDetails";

const mapStateToProps = (state: AppState): Pick<CastleOptionsWindowProps, StateProp> => ({
  visibleOptionDetails: state.townWindow.visibleOptionDetails,
});

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
