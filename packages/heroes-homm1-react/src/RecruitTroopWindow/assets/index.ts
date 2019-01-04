import BackgroundImage = require("./background.jpg");

const buttonImages = {
  cancel: {
    disabled: require("./cancel/disabled.png"),
    enabled: require("./cancel/enabled.png"),
  },
  max: {
    disabled: require("./max/disabled.png"),
    enabled: require("./max/enabled.png"),
  },
  okay: {
    disabled: require("./okay/disabled.png"),
    enabled: require("./okay/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
