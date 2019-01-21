import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MiscInfo } from "./MiscInfo";

storiesOf("HeroWindow/MiscInfo", module)
  .add("default", () => {
    const values = {
      experience: number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 }),
      luck: number("Luck", 0, { range: true, min: -3, max: 3, step: 1 }),
      morale: number("Morale", 0, { range: true, min: -3, max: 3, step: 1 }),
    };

    return (
      <MiscInfo
        values={values}
        onMouseEnter={action("Mouse Enter")}
        onMouseLeave={action("Mouse Leave")}
        onInfoMouseEnter={action("Info Mouse Enter")}
        onInfoMouseLeave={action("Info Mouse Leave")}
      />
    );
  });
