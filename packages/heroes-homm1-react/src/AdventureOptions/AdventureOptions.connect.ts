import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeAdventureOptions, openPuzzleWindow } from "heroes-homm1-state";

import { AdventureOptions, AdventureOptionsProps } from "./AdventureOptions";

type DispatchProp =
  "onViewPuzzleClick" |
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureOptionsProps, DispatchProp> => ({
  onViewPuzzleClick() {
    dispatch(openPuzzleWindow());
  },
  onOkayClick() {
    dispatch(closeAdventureOptions());
  },
});

const AdventureOptionsConnected = connect(null, mapDispatchToProps)(AdventureOptions);

export {
  AdventureOptionsConnected as AdventureOptions,
  AdventureOptionsProps,
};
