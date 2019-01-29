import { connect } from "react-redux";
import { Dispatch } from "redux";

import { gameActions } from "heroes-homm1-state";

import { BuildStructureWindow, BuildStructureWindowProps } from "./BuildStructureWindow";

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<BuildStructureWindowProps, DispatchProp> => ({
  onOkayClick(town, structure) {
    dispatch(gameActions.buildStructure(town, structure));
  },
});

const BuildStructureWindowConnected = connect(null, mapDispatchToProps)(BuildStructureWindow);

export {
  BuildStructureWindowConnected as BuildStructureWindow,
  BuildStructureWindowProps,
};
