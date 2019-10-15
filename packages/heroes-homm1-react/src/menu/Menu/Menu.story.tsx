import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Menu } from "./Menu";
import { MenuOption } from "./MenuOption";

storiesOf("menu|Menu", module)
  .add("default", () => (
    <Menu>
      <MenuOption>
        {text("Content", "Content")}
      </MenuOption>
    </Menu>
  ));
