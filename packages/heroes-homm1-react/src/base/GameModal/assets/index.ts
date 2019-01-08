import BodyImage = require("./body.png");
import FooterImage = require("./footer.png");
import HeaderImage = require("./header.png");

const buttonImages = {
  cancel: {
    disabled: require("./cancel/disabled.png"),
    enabled: require("./cancel/enabled.png"),
  },
  no: {
    disabled: require("./no/disabled.png"),
    enabled: require("./no/enabled.png"),
  },
  okay: {
    disabled: require("./okay/disabled.png"),
    enabled: require("./okay/enabled.png"),
  },
  yes: {
    disabled: require("./yes/disabled.png"),
    enabled: require("./yes/enabled.png"),
  },
};

export {
  BodyImage,
  FooterImage,
  HeaderImage,
  buttonImages,
};
