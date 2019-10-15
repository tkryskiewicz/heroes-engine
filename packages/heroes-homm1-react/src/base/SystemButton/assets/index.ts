import { ButtonImages } from "../../ImageButton";

const buttonImages: { readonly [i: string]: ButtonImages } = {
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
  buttonImages,
};
