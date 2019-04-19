import BackgroundImage = require("./background.jpg");
import BlockImage = require("./block.jpg");

const buttonImages = {
  down: {
    disabled: require("./down/disabled.jpg"),
    enabled: require("./down/enabled.jpg"),
  },
  up: {
    disabled: require("./up/disabled.jpg"),
    enabled: require("./up/enabled.jpg"),
  },
};

export {
  buttonImages,
  BackgroundImage,
  BlockImage,
};
