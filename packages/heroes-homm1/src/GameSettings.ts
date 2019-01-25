import { MovementSpeed } from "./MovementSpeed";
import { SoundVolume } from "./SoundVolume";

export interface GameSettings {
  readonly musicVolume: SoundVolume;
  readonly effectsVolume: SoundVolume;
  readonly movementSpeed: MovementSpeed;
  readonly autoSave: boolean;
  readonly showPath: boolean;
  readonly viewEnemyMovement: boolean;
}
