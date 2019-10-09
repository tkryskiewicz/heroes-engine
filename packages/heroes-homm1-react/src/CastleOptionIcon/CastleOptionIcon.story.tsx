import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { structure, town } from "../stories";
import { CastleOptionIcon } from "./CastleOptionIcon";

storiesOf("CastleOptionIcon", module)
  .add("default", () => (
    <CastleOptionIcon
      town={town("Town")}
      option={structure("Option")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
