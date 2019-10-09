import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { castleOptionStatus, structure, town } from "../../stories";
import { CastleOption } from "./CastleOption";

storiesOf("CastleOptionsWindow/CastleOption", module)
  .add("default", () => (
    <CastleOption
      town={town("Town")}
      option={structure("Option")}
      status={castleOptionStatus("Status")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
