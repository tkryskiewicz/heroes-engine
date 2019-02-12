import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { resource } from "../../stories";
import { ResourceAmount } from "./ResourceAmount";

storiesOf("base/ResourceAmount", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <ResourceAmount
      resource={resource("Resource")}
      amount={number("Amount", 0, { range: true, min: 0, max: 9999, step: 1 })}
    />
  ));
