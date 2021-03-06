import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { BuySpellBookWindow } from "./BuySpellBookWindow";

storiesOf("BuySpellBookWindow", module)
  .add("default", () => (
    <BuySpellBookWindow
      visible={boolean("Visible", true)}
      cost={{ [ResourceId.Gold]: 500 }}
      confirmDisabled={boolean("Confirm Disabled", false)}
      onConfirmClick={action("Confirm Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
