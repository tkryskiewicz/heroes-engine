import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { CreditsWindow } from "./CreditsWindow";

storiesOf("CreditsWindow", module)
  .add("default", () => (
    <CreditsWindow
      visible={boolean("Visible", true)}
      onClick={action("Click")}
    />
  ));
