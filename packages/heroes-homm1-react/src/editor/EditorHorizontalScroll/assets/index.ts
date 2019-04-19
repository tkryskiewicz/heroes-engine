import BackgroundImage = require("./background.jpg");
import BlockImage = require("./block.jpg");

const buttonImages = {
  left: {
    disabled: require("./left/disabled.jpg"),
    enabled: require("./left/enabled.jpg"),
  },
  right: {
    disabled: require("./right/disabled.jpg"),
    enabled: require("./right/enabled.jpg"),
  },
};

export {
  BackgroundImage,
  BlockImage,
  buttonImages,
};
