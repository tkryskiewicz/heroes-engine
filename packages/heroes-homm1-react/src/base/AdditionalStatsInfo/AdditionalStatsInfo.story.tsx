import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { luck, morale } from "../../stories";
import { AdditionalStatsInfo } from "./AdditionalStatsInfo";

storiesOf("base|AdditionalStatsInfo", module)
  .add("default", () => {
    const values = {
      experience: number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 }),
      luck: luck("Luck"),
      morale: morale("Morale"),
    };

    return (
      <AdditionalStatsInfo
        values={values}
        onMouseEnter={action("Mouse Enter")}
        onMouseLeave={action("Mouse Leave")}
        onInfoMouseEnter={action("Info Mouse Enter")}
        onInfoMouseLeave={action("Info Mouse Leave")}
      />
    );
  });
