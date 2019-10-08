import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Readme = require("./README.md");

import { resource } from "../../stories";
import { ResourceIcon } from "./ResourceIcon";

storiesOf("base|ResourceIcon", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("default", () => (
    <ResourceIcon
      resource={resource("Resource")}
      onClick={action("Click")}
    />
  ));
