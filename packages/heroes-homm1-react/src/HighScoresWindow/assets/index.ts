import DaysImage = require("./days.jpg");
import LandImage = require("./land.jpg");
import LeaderImage = require("./leader.jpg");
import PlayerImage = require("./player.jpg");
import ScoreImage = require("./score.jpg");
import TitleImage = require("./title.jpg");

const buttonImages = {
  campaign: {
    disabled: require("./campaign/disabled.png"),
    enabled: require("./campaign/enabled.png"),
  },
  exit: {
    disabled: require("./exit/disabled.png"),
    enabled: require("./exit/enabled.png"),
  },
  standard: {
    disabled: require("./standard/disabled.png"),
    enabled: require("./standard/enabled.png"),
  },
};

export {
  DaysImage,
  LandImage,
  LeaderImage,
  PlayerImage,
  ScoreImage,
  TitleImage,
  buttonImages,
};
