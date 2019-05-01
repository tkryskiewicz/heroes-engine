import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment } from "../stories";
import { TurnStatus } from "./TurnStatus";

storiesOf("TurnStatus", module)
  .add("default", () => (
    <TurnStatus
      alignment={alignment("Alignment")}
    />
  ));
