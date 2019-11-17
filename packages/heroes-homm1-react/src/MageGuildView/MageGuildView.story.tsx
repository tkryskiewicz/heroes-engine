import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { MageGuildView } from "./MageGuildView";

storiesOf("MageGuildView", module)
  .add("default", () => (
    <MageGuildView
      structure={text("Structure", "structure")}
      level={number("Level", 1, { range: true, min: 1, max: 4, step: 1 })}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
