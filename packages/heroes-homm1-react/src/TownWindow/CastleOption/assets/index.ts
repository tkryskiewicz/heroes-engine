import { CastleOptionStatus } from "heroes-homm1";

import BuiltImage = require("./built.png");
import UnaffordableImage = require("./unaffordable.png");
import UnavailableImage = require("./unavailable.png");

export const statusImages = {
  [CastleOptionStatus.Built]: BuiltImage,
  [CastleOptionStatus.Available]: undefined,
  [CastleOptionStatus.Unaffordable]: UnaffordableImage,
  [CastleOptionStatus.Unavailable]: UnavailableImage,
};
