import BackgroundImage = require("./background.jpg");

export { scenarioNumberImages } from "./scenario-number";

const buttonImages = {
  okay: {
    disabled: require("./okay/disabled.png"),
    enabled: require("./okay/enabled.png"),
  },
  restartScenario: {
    disabled: require("./restart-scenario/disabled.png"),
    enabled: require("./restart-scenario/enabled.png"),
  },
};

export {
  BackgroundImage,
  buttonImages,
};
