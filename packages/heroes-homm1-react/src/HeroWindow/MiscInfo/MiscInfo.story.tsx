import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { luck, morale } from "../../stories";
import { MiscInfo } from "./MiscInfo";

storiesOf("HeroWindow/MiscInfo", module)
  .add("default", () => {
    const values = {
      experience: number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 }),
      luck: luck("Luck"),
      morale: morale("Morale"),
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
