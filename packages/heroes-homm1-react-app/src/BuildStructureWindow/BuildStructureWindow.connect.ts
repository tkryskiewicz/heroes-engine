import { connect } from "react-redux";
import { Dispatch } from "redux";

import { BuildStructureWindow, BuildStructureWindowProps } from "heroes-homm1-react";
import { gameActions, townWindowActions } from "heroes-homm1-state";

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<BuildStructureWindowProps, DispatchProp> => ({
  onOkayClick(town, structure) {
    dispatch(townWindowActions.closeOptionDetails());
    dispatch(townWindowActions.closeStructureDetails());

    dispatch(gameActions.buildStructure(town, structure));
  },
});

const BuildStructureWindowConnected = connect(null, mapDispatchToProps)(BuildStructureWindow);

type BuildStructureWindowConnectedProps = ExtractProps<typeof BuildStructureWindowConnected>;

export {
  BuildStructureWindowConnected as BuildStructureWindow,
  BuildStructureWindowConnectedProps as BuildStructureWindowProps,
};
