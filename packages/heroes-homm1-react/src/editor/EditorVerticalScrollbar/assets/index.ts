import ThumbImage = require("./thumb.jpg");
import TrackImage = require("./track.jpg");

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
  ThumbImage,
  TrackImage,
  buttonImages,
};
