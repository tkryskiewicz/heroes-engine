import { storiesOf } from "@storybook/react";
import React from "react";

import { DetailsOptionDetails } from "./DetailsOptionDetails";

storiesOf("editor|DetailsOptionDetails", module)
  .add("default", () => (
    <DetailsOptionDetails />
  ));
