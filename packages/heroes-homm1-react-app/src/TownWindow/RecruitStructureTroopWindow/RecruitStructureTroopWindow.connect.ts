import { connect } from "react-redux";
import { Dispatch } from "redux";

import { gameActions, townWindowActions } from "heroes-homm1-state";

import { RecruitStructureTroopWindow, RecruitStructureTroopWindowProps } from "./RecruitStructureTroopWindow";

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<RecruitStructureTroopWindowProps, DispatchProp> => ({
  onOkayClick(town, structure, count) {
    dispatch(townWindowActions.closeStructureDetails());

    dispatch(gameActions.recruitTroop(town, structure, count));
  },
});

const RecruitStructureTroopWindowConnected = connect(null, mapDispatchToProps)(RecruitStructureTroopWindow);

export {
  RecruitStructureTroopWindowConnected as RecruitStructureTroopWindow,
};
