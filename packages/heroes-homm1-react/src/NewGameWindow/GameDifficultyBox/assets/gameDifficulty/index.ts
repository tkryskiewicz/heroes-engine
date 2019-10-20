import { GameDifficulty } from "heroes-homm1";

import easy = require("./difficulty-easy.jpg");
import expert = require("./difficulty-expert.jpg");
import hard = require("./difficulty-hard.jpg");
import normal = require("./difficulty-normal.jpg");

export const difficultyImages = {
  [GameDifficulty.Easy]: easy,
  [GameDifficulty.Normal]: normal,
  [GameDifficulty.Hard]: hard,
  [GameDifficulty.Expert]: expert,
};
