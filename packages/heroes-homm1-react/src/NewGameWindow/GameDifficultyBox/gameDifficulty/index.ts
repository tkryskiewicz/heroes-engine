import EasyImage = require("./difficulty-easy.jpg");
import ExpertImage = require("./difficulty-expert.jpg");
import HardImage = require("./difficulty-hard.jpg");
import NormalImage = require("./difficulty-normal.jpg");

export const difficultyImages: { [index: string]: string } = {
  easy: EasyImage,
  expert: ExpertImage,
  hard: HardImage,
  normal: NormalImage,
};
