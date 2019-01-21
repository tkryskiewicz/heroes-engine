import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MaxPlayers, OpponentSetting } from "heroes-homm1";

import { opponentSettingOptions } from "../../stories";
import { OpponentSettingBox } from "./OpponentSettingBox";

storiesOf("NewGameWindow/OpponentSettingBox", module)
  .add("default", () => (
    <OpponentSettingBox
      index={number("Index", 0, { range: true, min: 0, max: MaxPlayers - 1, step: 1 })}
      value={select("Value", opponentSettingOptions, OpponentSetting.Dumb)}
      onChange={action("Change")}
    />
  ));
