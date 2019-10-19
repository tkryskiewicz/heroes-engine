import { LuckType } from "heroes-homm1";

import bad = require("./luck-bad.png");
import good = require("./luck-good.png");
import neutral = require("./luck-neutral.png");

export const luck = {
  [LuckType.Bad]: bad,
  [LuckType.Good]: good,
  [LuckType.Neutral]: neutral,
};
