import { OpponentSetting } from "heroes-homm1";

import average = require("./opponent-average.jpg");
import dumb = require("./opponent-dumb.jpg");
import genius = require("./opponent-genius.jpg");
import none = require("./opponent-none.jpg");
import smart = require("./opponent-smart.jpg");

export const opponentSettingImages = {
  [OpponentSetting.None]: none,
  [OpponentSetting.Dumb]: dumb,
  [OpponentSetting.Average]: average,
  [OpponentSetting.Smart]: smart,
  [OpponentSetting.Genius]: genius,
};
