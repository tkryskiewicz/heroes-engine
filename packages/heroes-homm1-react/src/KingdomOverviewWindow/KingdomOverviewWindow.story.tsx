import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignmentOptions } from "../stories";
import { KingdomOverviewWindow } from "./KingdomOverviewWindow";

storiesOf("KingdomOverviewWindow", module)
  .add("default", () => (
    <KingdomOverviewWindow
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClasses={{}}
      castles={{}}
      towns={{}}
      mines={{}}
      resources={{}}
      goldPerDay={number("Gold Per Day", 0, { range: true, min: 0, max: 9999, step: 1 })}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
