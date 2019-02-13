import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment } from "../../stories";
import { AlignmentJewel } from "./AlignmentJewel";

storiesOf("base/AlignmentJewel", module)
  .add("default", () => (
    <AlignmentJewel
      value={alignment("Value")}
      onClick={action("Click")}
    />
  ));
