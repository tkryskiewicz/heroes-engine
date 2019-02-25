import { connect } from "react-redux";
import { Dispatch } from "redux";

import { GameOptions, GameOptionsProps } from "heroes-homm1-react";
import {
  AppState,
  gameOptionsActions,
  gameSettingsActions,
  scenarioInforWindowActions,
} from "heroes-homm1-state";

type StateProp =
  "autoSave" |
  "effectsVolume" |
  "movementSpeed" |
  "musicVolume" |
  "showPath" |
  "viewEnemyMovement";

const mapStateToProps = (state: AppState): Pick<GameOptionsProps, StateProp> => ({
  autoSave: state.gameSettings.autoSave,
  effectsVolume: state.gameSettings.effectsVolume,
  movementSpeed: state.gameSettings.movementSpeed,
  musicVolume: state.gameSettings.musicVolume,
  showPath: state.gameSettings.showPath,
  viewEnemyMovement: state.gameSettings.viewEnemyMovement,
});

type DispatchProp =
  "onMusicVolumeChange" |
  "onEffectsVolumeChange" |
  "onMovementSpeedChange" |
  "onAutoSaveChange" |
  "onShowPathChange" |
  "onViewEnemyMovementChange" |
  "onOkayClick" |
  "onInfoClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<GameOptionsProps, DispatchProp> => ({
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
  onOkayClick() {
    dispatch(gameOptionsActions.close());
  },
  onInfoClick() {
    dispatch(scenarioInforWindowActions.open());
    dispatch(gameOptionsActions.close());
  },
});

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(GameOptions);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as GameOptions,
  ComponentConnectedProps as GameOptionsProps,
};
