import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { alignment } from "../stories";
import { KingdomOverviewWindow } from "./KingdomOverviewWindow";

storiesOf("KingdomOverviewWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <KingdomOverviewWindow
      alignment={alignment("Alignment")}
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
