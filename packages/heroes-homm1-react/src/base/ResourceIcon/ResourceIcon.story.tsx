import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { resource } from "../../stories";
import { ResourceIcon } from "./ResourceIcon";

storiesOf("base|ResourceIcon", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceIcon
      resource={resource("Resource")}
      onClick={action("Click")}
    />
  ));
