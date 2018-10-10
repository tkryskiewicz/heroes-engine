import { GameSettingsAction, GameSettingsActionType } from "./actions";
import { GameSettingsState } from "./state";

import { MovementSpeed, SoundVolume } from "heroes-homm1";

const initialState: GameSettingsState = {
  autoSave: true,
  effectsVolume: SoundVolume.On,
  movementSpeed: MovementSpeed.Walk,
  musicVolume: SoundVolume.On,
  showPath: true,
  viewEnemyMovement: true,
};

export const gameSettingsReducer = (
  state: GameSettingsState = initialState,
  action: GameSettingsAction,
): GameSettingsState => {
  switch (action.type) {
    case GameSettingsActionType.ChangeMusicVolume:
      return {
        ...state,
        musicVolume: action.volume,
      };
    case GameSettingsActionType.ChangeEffectsVolume:
      return {
        ...state,
        effectsVolume: action.volume,
      };
    case GameSettingsActionType.ChangeMovementSpeed:
      return {
        ...state,
        movementSpeed: action.value,
      };
    case GameSettingsActionType.ChangeAutoSave:
      return {
        ...state,
        autoSave: action.value,
      };
    case GameSettingsActionType.ChangeShowPath:
      return {
        ...state,
        showPath: action.value,
      };
    case GameSettingsActionType.ChangeViewEnemyMovement:
      return {
        ...state,
        viewEnemyMovement: action.value,
      };
    default:
      return state;
  }
};
