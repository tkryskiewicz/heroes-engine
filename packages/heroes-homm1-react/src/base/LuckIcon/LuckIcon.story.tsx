import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { luckType } from "../../stories";
import { LuckIcon } from "./LuckIcon";

storiesOf("base|LuckIcon", module)
  .add("default", () => (
    <LuckIcon
      type={luckType("Type")}
      onClick={action("Click")}
    />
  ));
