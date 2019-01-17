import BackgroundImage = require("./background.jpg");

const buttonImages = {
  accept: {
    disabled: require("./accept/disabled.png"),
    enabled: require("./accept/enabled.png"),
  },
  decline: {
    disabled: require("./decline/disabled.png"),
    enabled: require("./decline/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
