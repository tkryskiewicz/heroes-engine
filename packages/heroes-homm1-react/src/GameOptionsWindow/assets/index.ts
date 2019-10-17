import { autoSave } from "./auto-save";
import BackgroundImage = require("./background.jpg");
import { effects } from "./effects";
import { info } from "./info";
import { loadGame } from "./load-game";
import { music } from "./music";
import { newGame } from "./new-game";
import { okay } from "./okay";
import { quit } from "./quit";
import { saveGame } from "./save-game";
import { showPath} from "./show-path";
import { viewEnemyMovement } from "./view-enemy-movement";

export { movementSpeed } from "./movement-speed";

export const buttonImages = {
  info,
  loadGame,
  newGame,
  okay,
  quit,
  saveGame,
};

export const switchImages = {
  autoSave,
  effects,
  music,
  showPath,
  viewEnemyMovement,
};

export {
  BackgroundImage,
};
