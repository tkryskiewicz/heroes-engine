import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, heroClass } from "../../stories";
import { SmallCrest } from "./SmallCrest";

storiesOf("base/SmallCrest", module)
  .add("default", () => (
    <SmallCrest
      alignment={alignment("Alignment")}
      heroClass={heroClass("Hero Class")}
    />
  ));
