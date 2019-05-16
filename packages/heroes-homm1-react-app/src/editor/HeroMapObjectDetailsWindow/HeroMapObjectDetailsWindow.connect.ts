import { connect } from "react-redux";
import { Dispatch } from "redux";

import { HeroMapObjectDetailsWindow, HeroMapObjectDetailsWindowProps } from "heroes-homm1-react";
import { AppState, heroMapObjectDetailsActions } from "heroes-homm1-state";

type StateProp =
  "data" |
  "creatureValueRangePromptVisible";

const mapStateToProps = (state: AppState): Pick<HeroMapObjectDetailsWindowProps, StateProp> => ({
  creatureValueRangePromptVisible: state.heroMapObjectDetails.creatureValueRangePromptVisible,
  data: state.game.data,
});

type DispatchProp =
  "onOpenCreatureValueRangePrompt" |
  "onCloseCreatureValueRangePrompt";

const mapDispatchToProps = (dispatch: Dispatch): Pick<HeroMapObjectDetailsWindowProps, DispatchProp> => ({
  onOpenCreatureValueRangePrompt() {
    dispatch(heroMapObjectDetailsActions.openCreatureValueRangePrompt());
  },
  onCloseCreatureValueRangePrompt() {
    dispatch(heroMapObjectDetailsActions.closeCreatureValueRangePrompt());
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(HeroMapObjectDetailsWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as HeroMapObjectDetailsWindow,
  ComponentConnectedProps as HeroMapObjectDetailsWindowProps,
};
