import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { MultiPlayerGameMenu } from "./MultiPlayerGameMenu";

storiesOf("menu|MultiPlayerGameMenu", module)
  .add("default", () => (
    <MultiPlayerGameMenu
      onHotSeatClick={action("Hot Seat Click")}
      onDirectConnectClick={action("Direct Connect Click")}
      onModemClick={action("Modem Click")}
      onNetworkClick={action("Network Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
