import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeAdventureOptions } from "heroes-homm1-state";

import { AdventureOptions, AdventureOptionsProps } from "./AdventureOptions";

type DispatchProp =
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureOptionsProps, DispatchProp> => ({
  onOkayClick() {
    dispatch(closeAdventureOptions());
  },
});

export const AdventureOptionsConnected = connect(null, mapDispatchToProps)(AdventureOptions);
