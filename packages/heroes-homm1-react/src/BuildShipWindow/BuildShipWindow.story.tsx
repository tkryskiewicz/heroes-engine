import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { BuildShipWindow } from "./BuildShipWindow";

storiesOf("BuildShipWindow", module)
  .add("default", () => (
    <BuildShipWindow
      visible={boolean("Visible", true)}
      cost={{ [ResourceId.Gold]: 1000, [ResourceId.Wood]: 10 }}
      canBuild={boolean("Can Build", true)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
