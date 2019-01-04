import BackgroundImage = require("./background.jpg");

export { movementSpeedImages } from "./movement-speed";

const buttonImages = {
  info: {
    disabled: require("./info/disabled.png"),
    enabled: require("./info/enabled.png"),
  },
  loadGame: {
    disabled: require("./load-game/disabled.png"),
    enabled: require("./load-game/enabled.png"),
  },
  newGame: {
    disabled: require("./new-game/disabled.png"),
    enabled: require("./new-game/enabled.png"),
  },
  okay: {
    disabled: require("./okay/disabled.png"),
    enabled: require("./okay/enabled.png"),
  },
  quit: {
    disabled: require("./quit/disabled.png"),
    enabled: require("./quit/enabled.png"),
  },
  saveGame: {
    disabled: require("./save-game/disabled.png"),
    enabled: require("./save-game/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
