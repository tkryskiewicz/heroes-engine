import { connect } from "react-redux";
import { Dispatch } from "redux";

import { StructureId } from "heroes-homm1";
import { buildStructure, closeStructureDetails } from "heroes-homm1-state";

import { BuildStructureWindow, BuildStructureWindowProps } from "./BuildStructureWindow";

type DispatchProp =
  "onOkayClick" |
  "onCancelClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<BuildStructureWindowProps, DispatchProp> => ({
  onOkayClick(town) {
    dispatch(buildStructure(town, StructureId.Castle));
  },
  onCancelClick() {
    dispatch(closeStructureDetails());
  },
});

export const BuildStructureWindowConnected = connect(null, mapDispatchToProps)(BuildStructureWindow);
