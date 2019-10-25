import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { HostGuestMenu } from "./HostGuestMenu";

storiesOf("menu/HostGuestMenu", module)
  .add("default", () => (
    <HostGuestMenu
      descriptionVisible={boolean("Description Visible", false)}
      onHostClick={action("Host Click")}
      onGuestClick={action("Guest Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
