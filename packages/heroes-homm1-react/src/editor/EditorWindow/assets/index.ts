import BackgroundImage = require("./background.jpg");

const buttonImages = {
  northEast: {
    disabled: require("./north-east/disabled.jpg"),
    enabled: require("./north-east/enabled.jpg"),
  },
  northWest: {
    disabled: require("./north-west/disabled.jpg"),
    enabled: require("./north-west/enabled.jpg"),
  },
  southEast: {
    disabled: require("./south-east/disabled.jpg"),
    enabled: require("./south-east/enabled.jpg"),
  },
  southWest: {
    disabled: require("./south-west/disabled.jpg"),
    enabled: require("./south-west/enabled.jpg"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
