import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeStructureDetails } from "heroes-homm1-state";

import { TownPopulationWindow, TownPopulationWindowProps } from "./TownPopulationWindow";

type DispatchProp =
  "onExitClick";

export const mapDispatchToProps = (dispatch: Dispatch): Pick<TownPopulationWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closeStructureDetails());
  },
});

const TownPopulationWindowConnected = connect(null, mapDispatchToProps)(TownPopulationWindow);

export {
  TownPopulationWindowConnected as TownPopulationWindow,
  TownPopulationWindowProps,
};
