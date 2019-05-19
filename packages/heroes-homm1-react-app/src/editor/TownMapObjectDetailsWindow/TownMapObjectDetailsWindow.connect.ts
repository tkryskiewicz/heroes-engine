import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TownMapObjectDetailsWindow, TownMapObjectDetailsWindowProps } from "heroes-homm1-react";
import { AppState, townMapObjectDetailsActions } from "heroes-homm1-state";

type StateProp =
  "data" |
  "creatureValueRangePromptVisible";

const mapStateToProps = (state: AppState): Pick<TownMapObjectDetailsWindowProps, StateProp> => ({
  creatureValueRangePromptVisible: state.townMapObjectDetails.creatureValueRangePromptVisible,
  data: state.game.data,
});

type DispatchProp =
  "onOpenCreatureValueRangePrompt" |
  "onCloseCreatureValueRangePrompt";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TownMapObjectDetailsWindowProps, DispatchProp> => ({
  onOpenCreatureValueRangePrompt() {
    dispatch(townMapObjectDetailsActions.openCreatureValueRangePrompt());
  },
  onCloseCreatureValueRangePrompt() {
    dispatch(townMapObjectDetailsActions.closeCreatureValueRangePrompt());
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(TownMapObjectDetailsWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as TownMapObjectDetailsWindow,
  ComponentConnectedProps as TownMapObjectDetailsWindowProps,
};
