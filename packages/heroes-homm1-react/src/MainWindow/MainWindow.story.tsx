import { storiesOf } from "@storybook/react";
import React from "react";

import { MainWindow } from "./MainWindow";

storiesOf("MainWindow", module)
  .add("default", () => (
    <MainWindow>
      Content
    </MainWindow>
  ));
