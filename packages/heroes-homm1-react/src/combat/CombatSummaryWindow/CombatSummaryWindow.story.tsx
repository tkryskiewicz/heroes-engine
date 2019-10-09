import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button } from "antd";
import React from "react";

import { CombatSummaryWindow } from "./CombatSummaryWindow";

storiesOf("combat|CombatSummaryWindow", module)
  .add("default", () => (
    <CombatSummaryWindow
      attackerCasualties={[]}
      defenderCasualties={[]}
      actions={<Button onClick={action("Action Click")}>Action</Button>}
    />
  ));
