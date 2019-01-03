import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import { Resource } from "heroes-homm1";

import Readme = require("./README.md");

import { resourceOptions } from "../../stories";
import { ResourceIcon, ResourceIconProps } from "./ResourceIcon";

const sizeOptions: { [s: string]: ResourceIconProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("base/ResourceIcon", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceIcon
      size={select("Size", sizeOptions, "large")}
      resource={select("Resource", resourceOptions, Resource.Gold)}
      onClick={action("Click")}
    />
  ));
