import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { resource } from "../../stories";
import { ResourceIcon } from "./ResourceIcon";

storiesOf("base|ResourceIcon", module)
  .add("default", () => (
    <ResourceIcon
      resource={resource("Resource")}
      onClick={action("Click")}
    />
  ));
