import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState, closeStructureDetails } from "heroes-homm1-state";

import { RecruitTroopWindow, RecruitTroopWindowProps } from "./RecruitTroopWindow";

type StateProp =
  "resources";

const mapStateToProps = (state: AppState): Pick<RecruitTroopWindowProps, StateProp> => ({
  resources: state.game.resources,
});

type DispatchProp =
  "onCancelClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<RecruitTroopWindowProps, DispatchProp> => ({
  onCancelClick() {
    dispatch(closeStructureDetails());
  },
});

export const RecruitTroopWindowConnected = connect(mapStateToProps, mapDispatchToProps)(RecruitTroopWindow);
