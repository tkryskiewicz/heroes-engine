import { MovementSpeed } from "heroes-homm1";

import CanterImage = require("./canter.jpg");
import GallopImage = require("./gallop.jpg");
import JumpImage = require("./jump.jpg");
import TrotImage = require("./trot.jpg");
import WalkImage = require("./walk.jpg");

export const movementSpeedImages = {
  [MovementSpeed.Canter]: CanterImage,
  [MovementSpeed.Gallop]: GallopImage,
  [MovementSpeed.Jump]: JumpImage,
  [MovementSpeed.Trot]: TrotImage,
  [MovementSpeed.Walk]: WalkImage,
};
