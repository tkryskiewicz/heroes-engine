import { MovementSpeed, SoundVolume } from "heroes-homm1";

export enum GameSettingsActionType {
  ChangeMusicVolume = "gameSettings/changeMusicVolume",
  ChangeEffectsVolume = "gameSettings/changeEffectsVolume",
  ChangeMovementSpeed = "gameSettings/changeMovementSpeed",
  ChangeAutoSave = "gameSettings/changeAutoSave",
  ChangeShowPath = "gameSettings/changeShowPath",
  ChangeViewEnemyMovement = "gameSettings/changeViewEnemyMovement",
}

export type GameSettingsAction =
  ChangeMusicVolumeAction |
  ChangeEffectsVolumeAction |
  ChangeMovementSpeedAction |
  ChangeAutoSaveAction |
  ChangeShowPathAction |
  ChangeViewEnemyMovementAction;

export interface ChangeMusicVolumeAction {
  readonly type: GameSettingsActionType.ChangeMusicVolume;
  readonly volume: SoundVolume;
}

export const changeMusicVolume = (volume: SoundVolume): ChangeMusicVolumeAction => ({
  type: GameSettingsActionType.ChangeMusicVolume,
  volume,
});

export interface ChangeEffectsVolumeAction {
  readonly type: GameSettingsActionType.ChangeEffectsVolume;
  readonly volume: SoundVolume;
}

export const changeEffectsVolume = (volume: SoundVolume): ChangeEffectsVolumeAction => ({
  type: GameSettingsActionType.ChangeEffectsVolume,
  volume,
});

export interface ChangeMovementSpeedAction {
  readonly type: GameSettingsActionType.ChangeMovementSpeed;
  readonly value: MovementSpeed;
}

export const changeMovementSpeed = (value: MovementSpeed): ChangeMovementSpeedAction => ({
  type: GameSettingsActionType.ChangeMovementSpeed,
  value,
});

export interface ChangeAutoSaveAction {
  readonly type: GameSettingsActionType.ChangeAutoSave;
  readonly value: boolean;
}

export const changeAutoSave = (value: boolean): ChangeAutoSaveAction => ({
  type: GameSettingsActionType.ChangeAutoSave,
  value,
});

export interface ChangeShowPathAction {
  readonly type: GameSettingsActionType.ChangeShowPath;
  readonly value: boolean;
}

export const changeShowPath = (value: boolean): ChangeShowPathAction => ({
  type: GameSettingsActionType.ChangeShowPath,
  value,
});

export interface ChangeViewEnemyMovementAction {
  readonly type: GameSettingsActionType.ChangeViewEnemyMovement;
  readonly value: boolean;
}

export const changeViewEnemyMovement = (value: boolean): ChangeViewEnemyMovementAction => ({
  type: GameSettingsActionType.ChangeViewEnemyMovement,
  value,
});
