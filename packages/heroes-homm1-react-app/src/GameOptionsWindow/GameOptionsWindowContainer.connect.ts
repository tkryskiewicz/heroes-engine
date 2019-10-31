import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  gameOptionsActions,
  gameSettingsActions,
} from "heroes-homm1-state";

import { GameOptionsWindowContainer, GameOptionsWindowContainerProps } from "./GameOptionsWindowContainer";

type StateProp =
  "autoSave" |
  "effectsVolume" |
  "movementSpeed" |
  "musicVolume" |
  "showPath" |
  "viewEnemyMovement" |
  "endGameOption";

const mapStateToProps = (state: AppState): Pick<GameOptionsWindowContainerProps, StateProp> => ({
  autoSave: state.gameSettings.autoSave,
  effectsVolume: state.gameSettings.effectsVolume,
  endGameOption: state.gameOptions.endGameOption,
  movementSpeed: state.gameSettings.movementSpeed,
  musicVolume: state.gameSettings.musicVolume,
  showPath: state.gameSettings.showPath,
  viewEnemyMovement: state.gameSettings.viewEnemyMovement,
});

type DispatchProp =
  "onOpenEndGamePromptClick" |
  "onCloseEndGamePromptClick" |
  "onMusicVolumeChange" |
  "onEffectsVolumeChange" |
  "onMovementSpeedChange" |
  "onAutoSaveChange" |
  "onShowPathChange" |
  "onViewEnemyMovementChange";

const mapDispatchToProps = (dispatch: Dispatch): Pick<GameOptionsWindowContainerProps, DispatchProp> => ({
  onOpenEndGamePromptClick(option) {
    dispatch(gameOptionsActions.openEndGamePrompt(option));
  },
  onCloseEndGamePromptClick() {
    dispatch(gameOptionsActions.closeEndGamePrompt());
  },
  onMusicVolumeChange(volume) {
    dispatch(gameSettingsActions.changeMusicVolume(volume));
  },
  onEffectsVolumeChange(volume) {
    dispatch(gameSettingsActions.changeEffectsVolume(volume));
  },
  onMovementSpeedChange(value) {
    dispatch(gameSettingsActions.changeMovementSpeed(value));
  },
  onAutoSaveChange(value) {
    dispatch(gameSettingsActions.changeAutoSave(value));
  },
  onShowPathChange(value) {
    dispatch(gameSettingsActions.changeShowPath(value));
  },
  onViewEnemyMovementChange(value) {
    dispatch(gameSettingsActions.changeViewEnemyMovement(value));
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(GameOptionsWindowContainer);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as GameOptionsWindow,
  ComponentConnectedProps as GameOptionsWindowProps,
};
