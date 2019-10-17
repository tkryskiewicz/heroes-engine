import { MovementSpeed } from "heroes-homm1";

import canter = require("./canter.jpg");
import gallop = require("./gallop.jpg");
import jump = require("./jump.jpg");
import trot = require("./trot.jpg");
import walk = require("./walk.jpg");

export const movementSpeed = {
  [MovementSpeed.Canter]: canter,
  [MovementSpeed.Gallop]: gallop,
  [MovementSpeed.Jump]: jump,
  [MovementSpeed.Trot]: trot,
  [MovementSpeed.Walk]: walk,
};
