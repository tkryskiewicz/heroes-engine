import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { EraseOptionDetails } from "./EraseOptionDetails";

storiesOf("editor/EraseOptionDetails", module)
  .add("default", () => (
    <EraseOptionDetails
      onTypesClick={action("Types Click")}
    />
  ));
