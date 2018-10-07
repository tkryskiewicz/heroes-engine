import { action } from "@storybook/addon-actions";
import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignmentOptions } from "../stories";
import { KingdomOverviewWindow } from "./KingdomOverviewWindow";

storiesOf(KingdomOverviewWindow.name, module)
  .add("default", () => (
    <KingdomOverviewWindow
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClasses={{}}
      castles={{}}
      towns={{}}
      mines={{}}
      resources={{}}
      goldPerDay={number("Gold Per Day", 0, { range: true, min: 0, max: 9999, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ));
