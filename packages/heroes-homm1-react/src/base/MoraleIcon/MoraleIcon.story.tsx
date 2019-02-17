import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { moraleType } from "../../stories";
import { MoraleIcon } from "./MoraleIcon";

storiesOf("base/MoraleIcon", module)
  .add("default", () => (
    <MoraleIcon
      type={moraleType("Type")}
      onClick={action("Click")}
    />
  ));
