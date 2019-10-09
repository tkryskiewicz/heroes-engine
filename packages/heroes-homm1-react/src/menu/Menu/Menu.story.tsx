import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Menu } from "./Menu";

storiesOf("menu|Menu", module)
  .add("default", () => (
    <Menu>
      {text("Content", "Content")}
    </Menu>
  ));
