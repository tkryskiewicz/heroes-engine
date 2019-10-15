import BackgroundImage = require("./background.jpg");
import { castSpell } from "./cast-spell";
import { dig } from "./dig";
import { okay } from "./okay";
import { viewPuzzle } from "./view-puzzle";
import { viewWorld } from "./view-world";

const buttonImages = {
  castSpell,
  dig,
  okay,
  viewPuzzle,
  viewWorld,
};

export {
  BackgroundImage,
  buttonImages,
};
