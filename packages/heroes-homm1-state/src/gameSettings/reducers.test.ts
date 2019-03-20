import { MovementSpeed, SoundVolume } from "heroes-homm1";

import {
  changeAutoSave,
  changeEffectsVolume,
  changeMovementSpeed,
  changeMusicVolume,
  changeShowPath,
  changeViewEnemyMovement,
} from "./actions";
import { gameSettingsReducer } from "./reducers";
import { GameSettingsState } from "./state";

describe("gameSettingsReducer", () => {
  it("should return initial state", () => {
    const result = gameSettingsReducer(undefined, {} as any);

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing ", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeMusicVolume(SoundVolume.Off));

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.Off,
      showPath: true,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing effects volume", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeEffectsVolume(SoundVolume.Off));

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.Off,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing movement speed", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeMovementSpeed(MovementSpeed.Canter));

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Canter,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing auto save", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeAutoSave(false));

    const expected: GameSettingsState = {
      autoSave: false,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing showing path", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeShowPath(false));

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: false,
      viewEnemyMovement: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing viewing enemy movement", () => {
    const state: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: true,
    };

    const result = gameSettingsReducer(state, changeViewEnemyMovement(false));

    const expected: GameSettingsState = {
      autoSave: true,
      effectsVolume: SoundVolume.On,
      movementSpeed: MovementSpeed.Walk,
      musicVolume: SoundVolume.On,
      showPath: true,
      viewEnemyMovement: false,
    };

    expect(result).toEqual(expected);
  });
});
