import BackgroundImage = require("./background.jpg");

const buttonImages = {
  dismiss: {
    disabled: require("./dismiss/disabled.png"),
    enabled: require("./dismiss/enabled.png"),
  },
  exit: {
    disabled: require("./exit/disabled.png"),
    enabled: require("./exit/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
