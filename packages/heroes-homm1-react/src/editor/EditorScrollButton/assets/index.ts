import { MapObjectOrientation } from "heroes-core";

const buttonImages = {
  [MapObjectOrientation.East]: {
    disabled: require("./east/disabled.jpg"),
    enabled: require("./east/enabled.jpg"),
  },
  [MapObjectOrientation.North]: {
    disabled: require("./north/disabled.jpg"),
    enabled: require("./north/enabled.jpg"),
  },
  [MapObjectOrientation.NorthEast]: {
    disabled: require("./north-east/disabled.jpg"),
    enabled: require("./north-east/enabled.jpg"),
  },
  [MapObjectOrientation.NorthWest]: {
    disabled: require("./north-west/disabled.jpg"),
    enabled: require("./north-west/enabled.jpg"),
  },
  [MapObjectOrientation.South]: {
    disabled: require("./south/disabled.jpg"),
    enabled: require("./south/enabled.jpg"),
  },
  [MapObjectOrientation.SouthEast]: {
    disabled: require("./south-east/disabled.jpg"),
    enabled: require("./south-east/enabled.jpg"),
  },
  [MapObjectOrientation.SouthWest]: {
    disabled: require("./south-west/disabled.jpg"),
    enabled: require("./south-west/enabled.jpg"),
  },
  [MapObjectOrientation.West]: {
    disabled: require("./west/disabled.jpg"),
    enabled: require("./west/enabled.jpg"),
  },
};

export {
  buttonImages,
};
