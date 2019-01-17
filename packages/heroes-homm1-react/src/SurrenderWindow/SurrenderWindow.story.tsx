import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { HeroId } from "heroes-homm1";

import { heroOptions } from "../stories";
import { SurrenderWindow } from "./SurrenderWindow";

storiesOf("SurrenderWindow", module)
  .add("default", () => (
    <SurrenderWindow
      visible={boolean("Visible", true)}
      hero={select("Hero", heroOptions, HeroId.LordKilburn)}
      cost={number("Cost", 1000, { range: true, min: 1, max: 999999, step: 1 })}
      onAcceptClick={action("Accept Click")}
      onDeclineClick={action("Decline Click")}
    />
  ));
