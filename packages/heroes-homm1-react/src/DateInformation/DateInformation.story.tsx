import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DateInformation } from "./DateInformation";

storiesOf("DateInformation", module)
  .add("default", () => (
    <DateInformation
      month={number("Month", 1, { range: true, min: 1, max: 99, step: 1 })}
      week={number("Week", 1, { range: true, min: 1, max: 4, step: 1 })}
      day={number("Day", 1, { range: true, min: 1, max: 7, step: 1 })}
    />
  ));
