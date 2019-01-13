import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  AppState,
  changeAutoSave,
  changeEffectsVolume,
  changeMovementSpeed,
  changeMusicVolume,
  changeShowPath,
  changeViewEnemyMovement,
  closeGameOptions,
  openScenarioInfoWindow,
} from "heroes-homm1-state";

import { GameOptions, GameOptionsProps } from "./GameOptions";

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
    dispatch(changeMusicVolume(volume));
  },
  onEffectsVolumeChange(volume) {
    dispatch(changeEffectsVolume(volume));
  },
  onMovementSpeedChange(value) {
    dispatch(changeMovementSpeed(value));
  },
  onAutoSaveChange(value) {
    dispatch(changeAutoSave(value));
  },
  onShowPathChange(value) {
    dispatch(changeShowPath(value));
  },
  onViewEnemyMovementChange(value) {
    dispatch(changeViewEnemyMovement(value));
  },
  onOkayClick() {
    dispatch(closeGameOptions());
  },
  onInfoClick() {
    dispatch(openScenarioInfoWindow());
  },
});

const GameOptionsConnected = connect(mapStateToProps, mapDispatchToProps)(GameOptions);

export {
  GameOptionsConnected as GameOptions,
  GameOptionsProps,
};
