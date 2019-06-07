import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { resource } from "../../stories";
import { ResourceIcon, ResourceIconProps } from "./ResourceIcon";

const sizeOptions: Array<ResourceIconProps["size"]> = [
  "large",
  "small",
];

storiesOf("base|ResourceIcon", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceIcon
      size={select("Size", sizeOptions, "large")}
      resource={resource("Resource")}
      onClick={action("Click")}
    />
  ));
