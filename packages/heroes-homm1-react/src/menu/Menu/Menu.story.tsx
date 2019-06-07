import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Menu } from "./Menu";

storiesOf("menu|Menu", module)
  .add("default", () => (
    <Menu>
      {text("Content", "Content")}
    </Menu>
  ));
