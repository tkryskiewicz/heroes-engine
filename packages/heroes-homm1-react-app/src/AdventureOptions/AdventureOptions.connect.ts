import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AdventureOptions, AdventureOptionsProps } from "heroes-homm1-react";
import { adventureOptionsActions, puzzleWindowActions } from "heroes-homm1-state";

type DispatchProp =
  "onViewPuzzleClick" |
  "onOkayClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<AdventureOptionsProps, DispatchProp> => ({
  onViewPuzzleClick() {
    dispatch(adventureOptionsActions.close());

    dispatch(puzzleWindowActions.open());
  },
  onOkayClick() {
    dispatch(adventureOptionsActions.close());
  },
});

const ComponentConnected = connect(null, mapDispatchToProps)(AdventureOptions);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as AdventureOptions,
  ComponentConnectedProps as AdventureOptionsProps,
};
