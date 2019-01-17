import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeCastleOptionDetails, openCastleOptionDetails } from "heroes-homm1-state";

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
    dispatch(openCastleOptionDetails(option));
  },
  onCloseOptionDetailsClick() {
    dispatch(closeCastleOptionDetails());
  },
});

const CastleOptionsWindowConnected = connect(mapStateToProps, mapDispatchToProps)(CastleOptionsWindow);

export {
  CastleOptionsWindowConnected as CastleOptionsWindow,
  CastleOptionsWindowProps,
};
