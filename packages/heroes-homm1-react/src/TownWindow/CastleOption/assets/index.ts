import { StructureStatus } from "heroes-homm1";

import BuiltImage = require("./built.png");
import NotEnoughResourcesImage = require("./not-enough-resources.png");
import UnavailableImage = require("./unavailable.png");

export const gameOptionStatusImages = {
  [StructureStatus.Built]: BuiltImage,
  [StructureStatus.Available]: undefined,
  [StructureStatus.NotEnoughResources]: NotEnoughResourcesImage,
  [StructureStatus.Unavailable]: UnavailableImage,
};
