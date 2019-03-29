import { connect } from "react-redux";
import { Dispatch } from "redux";

import { LuckType, MoraleType } from "heroes-homm1";
import { AppState, troopWindowActions } from "heroes-homm1-state";

import { TroopWindowContainer, TroopWindowContainerProps } from "./TroopWindowContainer";

type StateProp =
  "creatureById" |
  "morale" |
  "luck" |
  "dismissPromptVisible";

const mapStateToProps = (state: AppState): Pick<TroopWindowContainerProps, StateProp> => ({
  creatureById: state.game.data.creatures,
  dismissPromptVisible: state.troopWindow.dismissPromptVisible,
  luck: LuckType.Neutral,
  morale: MoraleType.Neutral,
});

type DispatchProp =
  "onDismissClick" |
  "onCancelDismissClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<TroopWindowContainerProps, DispatchProp> => ({
  onDismissClick() {
    dispatch(troopWindowActions.openDismissPrompt());
  },
  onCancelDismissClick() {
    dispatch(troopWindowActions.closeDismissPrompt());
  },
});

const ContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TroopWindowContainer);

type ContainerConnectedProps = ExtractProps<typeof ContainerConnected>;

export {
  ContainerConnected as TroopWindow,
  ContainerConnectedProps as TroopWindowProps,
};
