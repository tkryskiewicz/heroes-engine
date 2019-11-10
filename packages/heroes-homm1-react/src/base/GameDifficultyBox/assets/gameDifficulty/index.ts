import { GameDifficulty } from "heroes-homm1";

import easy = require("./easy.jpg");
import expert = require("./expert.jpg");
import hard = require("./hard.jpg");
import normal = require("./normal.jpg");

export const difficultyImages = {
  [GameDifficulty.Easy]: easy,
  [GameDifficulty.Normal]: normal,
  [GameDifficulty.Hard]: hard,
  [GameDifficulty.Expert]: expert,
};
