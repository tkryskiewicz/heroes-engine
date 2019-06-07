import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { alignment, heroClass } from "../../stories";
import { Crest } from "./Crest";

storiesOf("base|Crest", module)
  .add("default", () => (
    <Crest
      alignment={alignment("Alignment")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ))
  .add("hero crest", () => (
    <Crest
      alignment={alignment("Alignment")}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
