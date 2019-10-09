import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { TavernWindow } from "./TavernWindow";

storiesOf("TavernWindow", module)
  .add("default", () => (
    <TavernWindow
      visible={boolean("Visible", true)}
      onOkayClick={action("Okay Click")}
    />
  ));
