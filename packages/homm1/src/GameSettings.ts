import { MovementSpeed } from "./MovementSpeed";
import { SoundVolume } from "./SoundVolume";

export interface GameSettings {
  musicVolume: SoundVolume;
  effectsVolume: SoundVolume;
  movementSpeed: MovementSpeed;
  autoSave: boolean;
  showPath: boolean;
  viewEnemyMovement: boolean;
}
