import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { MainWindowContainer } from "./MainWindowContainer";

storiesOf("MainWindowContainer", module)
  .add("default", () => (
    <MainWindowContainer />
  ))
  .add("credits", () => (
    <MainWindowContainer
      creditsVisible={boolean("Credits Visible", true)}
      onOpenCreditsClick={action("Open Credits Click")}
      onCloseCreditsClick={action("Close Credits Click")}
    />
  ));
