import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Treasury } from "./Treasury";

storiesOf("base|Treasury", module)
  .add("default", () => (
    <Treasury
      resources={{}}
      onExitMouseEnter={action("Exit Mouse Enter")}
      onExitMouseLeave={action("Exit Mouse Leave")}
      onExitClick={action("Exit Click")}
    />
  ));
