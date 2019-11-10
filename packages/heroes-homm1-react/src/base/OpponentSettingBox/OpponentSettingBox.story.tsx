import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { opponentSetting } from "../../stories";
import { OpponentSettingBox } from "./OpponentSettingBox";

storiesOf("base|OpponentSettingBox", module)
  .add("default", () => (
    <OpponentSettingBox
      index={number("Index", 0, { range: true, min: 0, max: 3, step: 1 })}
      value={opponentSetting("Value")}
      onClick={action("Click")}
    />
  ));
