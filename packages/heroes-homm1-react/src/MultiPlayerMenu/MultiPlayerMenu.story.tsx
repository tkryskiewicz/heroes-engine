import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MultiPlayerMenu } from "./MultiPlayerMenu";

storiesOf(MultiPlayerMenu.name, module)
  .add("default", () => (
    <MultiPlayerMenu
      onHotSeatClick={action("Hot Seat Click")}
      onDirectConnectClick={action("Direct Connect Click")}
      onModemClick={action("Modem Click")}
      onNetworkClick={action("Network Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
