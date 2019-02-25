import { connect } from "react-redux";
import { Dispatch } from "redux";

import { RecruitTroopWindow, RecruitTroopWindowProps } from "heroes-homm1-react";
import { AppState, townWindowActions } from "heroes-homm1-state";

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
    dispatch(townWindowActions.changeRecruitTroopCount(count));
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(RecruitTroopWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as RecruitTroopWindow,
  ComponentConnectedProps as RecruitTroopWindowProps,
};
