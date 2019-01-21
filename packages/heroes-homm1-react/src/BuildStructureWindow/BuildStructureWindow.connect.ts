import { connect } from "react-redux";
import { Dispatch } from "redux";

import { buildStructure } from "heroes-homm1-state";

import { BuildStructureWindow, BuildStructureWindowProps } from "./BuildStructureWindow";

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<BuildStructureWindowProps, DispatchProp> => ({
  onOkayClick(town, structure) {
    dispatch(buildStructure(town, structure));
  },
});

const BuildStructureWindowConnected = connect(null, mapDispatchToProps)(BuildStructureWindow);

export {
  BuildStructureWindowConnected as BuildStructureWindow,
  BuildStructureWindowProps,
};