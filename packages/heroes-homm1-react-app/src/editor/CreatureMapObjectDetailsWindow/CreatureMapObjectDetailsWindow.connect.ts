import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CreatureMapObjectDetailsWindow, CreatureMapObjectDetailsWindowProps } from "heroes-homm1-react";
import { AppState, creatureMapObjectDetailsActions } from "heroes-homm1-state";

type StateProp =
  "countValueRangePromptVisible";

const mapStateToProps = (state: AppState): Pick<CreatureMapObjectDetailsWindowProps, StateProp> => ({
  countValueRangePromptVisible: state.creatureMapObjectDetails.countValueRangePromptVisible,
});

type DispatchProp =
  "onOpenCountValueRangePromptClick" |
  "onCloseCountValueRangePromptClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<CreatureMapObjectDetailsWindowProps, DispatchProp> => ({
  onOpenCountValueRangePromptClick() {
    dispatch(creatureMapObjectDetailsActions.openCountValueRangePrompt());
  },
  onCloseCountValueRangePromptClick() {
    dispatch(creatureMapObjectDetailsActions.closeCountValueRangePrompt());
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(CreatureMapObjectDetailsWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as CreatureMapObjectDetailsWindow,
  ComponentConnectedProps as CreatureMapObjectDetailsWindowProps,
};
