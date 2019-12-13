import { Direction } from "heroes-core";

const buttonImages = {
  [Direction.East]: {
    disabled: require("./east/disabled.jpg"),
    enabled: require("./east/enabled.jpg"),
  },
  [Direction.North]: {
    disabled: require("./north/disabled.jpg"),
    enabled: require("./north/enabled.jpg"),
  },
  [Direction.NorthEast]: {
    disabled: require("./north-east/disabled.jpg"),
    enabled: require("./north-east/enabled.jpg"),
  },
  [Direction.NorthWest]: {
    disabled: require("./north-west/disabled.jpg"),
    enabled: require("./north-west/enabled.jpg"),
  },
  [Direction.South]: {
    disabled: require("./south/disabled.jpg"),
    enabled: require("./south/enabled.jpg"),
  },
  [Direction.SouthEast]: {
    disabled: require("./south-east/disabled.jpg"),
    enabled: require("./south-east/enabled.jpg"),
  },
  [Direction.SouthWest]: {
    disabled: require("./south-west/disabled.jpg"),
    enabled: require("./south-west/enabled.jpg"),
  },
  [Direction.West]: {
    disabled: require("./west/disabled.jpg"),
    enabled: require("./west/enabled.jpg"),
  },
};

export {
  buttonImages,
};
