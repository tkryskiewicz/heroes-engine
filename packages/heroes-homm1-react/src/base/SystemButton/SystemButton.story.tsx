import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { SystemButton, SystemButtonProps } from "./SystemButton";

const typeOptions: SystemButtonProps["type"][] = [
  "yes",
  "no",
  "okay",
  "cancel",
];

storiesOf("base|SystemButton", module)
  .add("default", () => (
    <SystemButton
      type={select("Type", typeOptions, "yes")}
      disabled={boolean("Disabled", false)}
      onClick={action("Click")}
    />
  ));
