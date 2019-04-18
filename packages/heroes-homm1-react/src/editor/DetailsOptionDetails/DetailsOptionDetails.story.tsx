import { storiesOf } from "@storybook/react";
import * as React from "react";

import { DetailsOptionDetails } from "./DetailsOptionDetails";

storiesOf("editor/DetailsOptionDetails", module)
  .add("default", () => (
    <DetailsOptionDetails />
  ));
