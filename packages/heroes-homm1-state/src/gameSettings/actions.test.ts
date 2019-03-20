import { MovementSpeed, SoundVolume } from "heroes-homm1";

import {
  changeAutoSave,
  ChangeAutoSaveAction,
  changeEffectsVolume,
  ChangeEffectsVolumeAction,
  changeMovementSpeed,
  ChangeMovementSpeedAction,
  changeMusicVolume,
  ChangeMusicVolumeAction,
  changeShowPath,
  ChangeShowPathAction,
  changeViewEnemyMovement,
  ChangeViewEnemyMovementAction,
  GameSettingsActionType,
} from "./actions";

describe("gameSettingsActions", () => {
  it("should create an action to change music volume", () => {
    const result = changeMusicVolume(SoundVolume.Off);

    const expected: ChangeMusicVolumeAction = {
      type: GameSettingsActionType.ChangeMusicVolume,
      volume: SoundVolume.Off,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change effects volume", () => {
    const result = changeEffectsVolume(SoundVolume.Off);

    const expected: ChangeEffectsVolumeAction = {
      type: GameSettingsActionType.ChangeEffectsVolume,
      volume: SoundVolume.Off,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change movement speed", () => {
    const result = changeMovementSpeed(MovementSpeed.Canter);

    const expected: ChangeMovementSpeedAction = {
      type: GameSettingsActionType.ChangeMovementSpeed,
      value: MovementSpeed.Canter,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change auto save", () => {
    const result = changeAutoSave(false);

    const expected: ChangeAutoSaveAction = {
      type: GameSettingsActionType.ChangeAutoSave,
      value: false,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change showing path", () => {
    const result = changeShowPath(false);

    const expected: ChangeShowPathAction = {
      type: GameSettingsActionType.ChangeShowPath,
      value: false,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change viewing enemy movement", () => {
    const result = changeViewEnemyMovement(false);

    const expected: ChangeViewEnemyMovementAction = {
      type: GameSettingsActionType.ChangeViewEnemyMovement,
      value: false,
    };

    expect(result).toEqual(expected);
  });
});
