import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CongratulationsWindow } from "./CongratulationsWindow";

storiesOf(CongratulationsWindow.name, module)
  .add("default", () => (
    <CongratulationsWindow
      visible={boolean("Visible", true)}
      onClick={action("Click")}
    >
      {text("Content", "Content")}
    </CongratulationsWindow>
  ));
