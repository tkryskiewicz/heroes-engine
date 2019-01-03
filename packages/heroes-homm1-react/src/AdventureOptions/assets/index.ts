import BackgroundImage = require("./background.jpg");

const buttonImages = {
  castSpell: {
    disabled: require("./cast-spell/disabled.png"),
    enabled: require("./cast-spell/enabled.png"),
  },
  dig: {
    disabled: require("./dig/disabled.png"),
    enabled: require("./dig/enabled.png"),
  },
  okay: {
    disabled: require("./okay/disabled.png"),
    enabled: require("./okay/enabled.png"),
  },
  viewPuzzle: {
    disabled: require("./view-puzzle/disabled.png"),
    enabled: require("./view-puzzle/enabled.png"),
  },
  viewWorld: {
    disabled: require("./view-world/disabled.png"),
    enabled: require("./view-world/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
