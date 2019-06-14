import BackgroundImage = require("./background.png");

const buttonImages = {
  cancel: {
    disabled: require("./cancel/disabled.png"),
    enabled: require("./cancel/enabled.png"),
  },
  castSpell: {
    disabled: require("./cast-spell/disabled.png"),
    enabled: require("./cast-spell/enabled.png"),
  },
  retreat: {
    disabled: require("./retreat/disabled.png"),
    enabled: require("./retreat/enabled.png"),
  },
  surrender: {
    disabled: require("./surrender/disabled.png"),
    enabled: require("./surrender/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
