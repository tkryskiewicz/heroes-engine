import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeStructureDetails } from "heroes-homm1-state";

import { StructuresWindow, StructuresWindowProps } from "./StructuresWindow";

type DispatchProp =
  "onExitClick";

export const mapDispatchToProps = (dispatch: Dispatch): Pick<StructuresWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closeStructureDetails());
  },
});

export const StructuresWindowConnected = connect(null, mapDispatchToProps)(StructuresWindow);
