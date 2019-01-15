import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, changeRecruitTroopCount } from "heroes-homm1-state";

import { RecruitTroopWindow, RecruitTroopWindowProps } from "./RecruitTroopWindow";

type StateProp =
  "resources" |
  "count";

const mapStateToProps = (state: AppState): Pick<RecruitTroopWindowProps, StateProp> => ({
  count: state.townWindow.recruitTroopCount,
  resources: state.game.resources,
});

type DispatchProp =
  "onCountChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<RecruitTroopWindowProps, DispatchProp> => ({
  onCountChange(count) {
    dispatch(changeRecruitTroopCount(count));
  },
});

const RecruitTroopWindowConnected = connect(mapStateToProps, mapDispatchToProps)(RecruitTroopWindow);

export {
  RecruitTroopWindowConnected as RecruitTroopWindow,
  RecruitTroopWindowProps,
};
