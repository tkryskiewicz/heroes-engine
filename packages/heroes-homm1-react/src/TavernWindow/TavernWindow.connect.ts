import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeStructureDetails } from "heroes-homm1-state";

import { TavernWindow, TavernWindowProps } from "./TavernWindow";

type StateProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TavernWindowProps, StateProp> => ({
  onOkayClick() {
    dispatch(closeStructureDetails());
  },
});

const TavernWindowConnected = connect(null, mapDispatchToProps)(TavernWindow);

export {
  TavernWindowConnected as TavernWindow,
  TavernWindowProps,
};
