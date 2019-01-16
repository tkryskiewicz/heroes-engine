import { CastleOptionStatus } from "heroes-homm1";

import BuiltImage = require("./built.png");
import NotEnoughResourcesImage = require("./not-enough-resources.png");
import UnavailableImage = require("./unavailable.png");

export const gameOptionStatusImages = {
  [CastleOptionStatus.Built]: BuiltImage,
  [CastleOptionStatus.Available]: undefined,
  [CastleOptionStatus.NotEnoughResources]: NotEnoughResourcesImage,
  [CastleOptionStatus.Unavailable]: UnavailableImage,
};
