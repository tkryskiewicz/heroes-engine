import BackgroundImage = require("./background.jpg");

const buttonImages = {
  auto: {
    disabled: require("./auto/disabled.png"),
    enabled: require("./auto/enabled.png"),
  },
  skip: {
    disabled: require("./skip/disabled.png"),
    enabled: require("./skip/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
