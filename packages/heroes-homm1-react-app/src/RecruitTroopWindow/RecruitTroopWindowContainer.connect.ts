import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, townWindowActions } from "heroes-homm1-state";

import { RecruitTroopWindowContainer, RecruitTroopWindowContainerProps } from "./RecruitTroopWindowContainer";

type StateProp =
  "resources" |
  "count";

const mapStateToProps = (state: AppState): Pick<RecruitTroopWindowContainerProps, StateProp> => ({
  count: state.townWindow.recruitTroopCount,
  resources: state.game.resources,
});

type DispatchProp =
  "onCountChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<RecruitTroopWindowContainerProps, DispatchProp> => ({
  onCountChange(count) {
    dispatch(townWindowActions.changeRecruitTroopCount(count));
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(RecruitTroopWindowContainer);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as RecruitTroopWindow,
  ComponentConnectedProps as RecruitTroopWindowProps,
};
