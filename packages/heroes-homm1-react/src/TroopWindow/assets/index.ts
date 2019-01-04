import BackgroundImage = require("./background.png");
import CountBackgroundImage = require("./count-background.jpg");

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
  CountBackgroundImage,
  buttonImages,
};
