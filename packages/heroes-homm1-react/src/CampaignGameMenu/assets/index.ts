import { ButtonImages } from "../../base";

const buttonImages: { [index: string]: ButtonImages } = {
  "cancel": {
    disabled: require("./cancel/disabled.png"),
    enabled: require("./cancel/enabled.png"),
  },
  "play-lord-alamar": {
    disabled: require("./play-lord-alamar/disabled.png"),
    enabled: require("./play-lord-alamar/enabled.png"),
  },
  "play-lord-ironfist": {
    disabled: require("./play-lord-ironfist/disabled.png"),
    enabled: require("./play-lord-ironfist/enabled.png"),
  },
  "play-lord-slayer": {
    disabled: require("./play-lord-slayer/disabled.png"),
    enabled: require("./play-lord-slayer/enabled.png"),
  },
  "play-queen-lamanda": {
    disabled: require("./play-queen-lamanda/disabled.png"),
    enabled: require("./play-queen-lamanda/enabled.png"),
  },
};

export {
  buttonImages,
};
