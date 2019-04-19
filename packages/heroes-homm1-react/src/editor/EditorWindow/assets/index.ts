import BackgroundImage = require("./background.jpg");
import HScrollBackground = require("./hscroll-background.jpg");
import HScrollBlock = require("./hscroll-block.jpg");
import VScrollBackground = require("./vscroll-background.jpg");
import VScrollBlock = require("./vscroll-block.jpg");

const buttonImages = {
  east: {
    disabled: require("./east/disabled.jpg"),
    enabled: require("./east/enabled.jpg"),
  },
  north: {
    disabled: require("./north/disabled.jpg"),
    enabled: require("./north/enabled.jpg"),
  },
  northEast: {
    disabled: require("./north-east/disabled.jpg"),
    enabled: require("./north-east/enabled.jpg"),
  },
  northWest: {
    disabled: require("./north-west/disabled.jpg"),
    enabled: require("./north-west/enabled.jpg"),
  },
  south: {
    disabled: require("./south/disabled.jpg"),
    enabled: require("./south/enabled.jpg"),
  },
  southEast: {
    disabled: require("./south-east/disabled.jpg"),
    enabled: require("./south-east/enabled.jpg"),
  },
  southWest: {
    disabled: require("./south-west/disabled.jpg"),
    enabled: require("./south-west/enabled.jpg"),
  },
  west: {
    disabled: require("./west/disabled.jpg"),
    enabled: require("./west/enabled.jpg"),
  },
};

export {
  BackgroundImage,
  buttonImages,
  HScrollBackground,
  HScrollBlock,
  VScrollBackground,
  VScrollBlock,
};
