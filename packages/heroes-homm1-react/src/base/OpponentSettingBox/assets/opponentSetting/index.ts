import { OpponentSetting } from "heroes-homm1";

import average = require("./average.jpg");
import dumb = require("./dumb.jpg");
import genius = require("./genius.jpg");
import none = require("./none.jpg");
import smart = require("./smart.jpg");

export const opponentSettingImages = {
  [OpponentSetting.None]: none,
  [OpponentSetting.Dumb]: dumb,
  [OpponentSetting.Average]: average,
  [OpponentSetting.Smart]: smart,
  [OpponentSetting.Genius]: genius,
};
