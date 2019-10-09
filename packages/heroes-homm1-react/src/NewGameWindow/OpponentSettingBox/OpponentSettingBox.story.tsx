import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { MaxPlayers } from "heroes-homm1";

import { opponentSetting } from "../../stories";
import { OpponentSettingBox } from "./OpponentSettingBox";

storiesOf("NewGameWindow/OpponentSettingBox", module)
  .add("default", () => (
    <OpponentSettingBox
      index={number("Index", 0, { range: true, min: 0, max: MaxPlayers - 1, step: 1 })}
      value={opponentSetting("Value")}
      onChange={action("Change")}
    />
  ));
