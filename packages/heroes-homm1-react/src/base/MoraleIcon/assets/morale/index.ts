import { MoraleType } from "heroes-homm1";

import bad = require("./morale-bad.png");
import good = require("./morale-good.png");
import neutral = require("./morale-neutral.png");

export const morale = {
  [MoraleType.Bad]: bad,
  [MoraleType.Good]: good,
  [MoraleType.Neutral]: neutral,
};
