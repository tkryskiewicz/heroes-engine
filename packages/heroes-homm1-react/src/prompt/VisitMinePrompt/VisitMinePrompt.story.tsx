import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { mine, resource } from "../../stories";
import { VisitMinePrompt } from "./VisitMinePrompt";

storiesOf("prompt/VisitMinePrompt", module)
  .add("default", () => (
    <VisitMinePrompt
      visible={boolean("Visible", true)}
      resource={resource("Resource")}
      mine={mine("Mine")}
      amount={number("Amount", 1, { range: true, min: 0, max: 100, step: 1 })}
      onConfirmClick={action("Confirm Click")}
    />
  ));
