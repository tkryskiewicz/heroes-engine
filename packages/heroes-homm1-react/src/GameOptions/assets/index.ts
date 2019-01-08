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

const switchImages = {
  autoSave: {
    checked: require("./auto-save/checked.jpg"),
    unchecked: require("./auto-save/unchecked.jpg"),
  },
  effects: {
    checked: require("./effects/checked.jpg"),
    unchecked: require("./effects/unchecked.jpg"),
  },
  music: {
    checked: require("./music/checked.jpg"),
    unchecked: require("./music/unchecked.jpg"),
  },
  showPath: {
    checked: require("./show-path/checked.jpg"),
    unchecked: require("./show-path/unchecked.jpg"),
  },
  viewEnemyMovement: {
    checked: require("./view-enemy-movement/checked.jpg"),
    unchecked: require("./view-enemy-movement/unchecked.jpg"),
  },
};

export {
  BackgroundImage,
  buttonImages,
  switchImages,
};
