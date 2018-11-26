import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { MiscInfo } from "./MiscInfo";

storiesOf(`HeroWindow/${MiscInfo.name}`, module)
  .add("default", () => (
    <MiscInfo
      morale={number("Morale", 0, { range: true, min: -3, max: 3, step: 1 })}
      luck={number("Luck", 0, { range: true, min: -3, max: 3, step: 1 })}
      experience={number("Experience", 0, { range: true, min: 0, max: 999999, step: 1 })}
    />
  ));
