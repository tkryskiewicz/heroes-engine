import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { switchImages } from "./assets";

import { GameSwitch, GameSwitchType } from "./GameSwitch";

const typeOptions = Object.keys(switchImages).reduce<{ [type: string]: GameSwitchType }>((p, c) => {
  p[c] = c as any;

  return p;
}, {});

storiesOf(GameSwitch.name, module)
  .add("default", () => (
    <GameSwitch
      type={select("Type", typeOptions, "checkbox")}
      checked={boolean("Checked", false)}
      onChange={action("Change")}
    />
  ));
