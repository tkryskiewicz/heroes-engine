import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { HeroWindow, HeroWindowProps } from "./HeroWindow";

const heroBase: HeroWindowProps["hero"] = {
  skills: {},
};

storiesOf("HeroWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <HeroWindow
      visible={boolean("Visible", true)}
      hero={heroBase}
      title={text("Title", "Title")}
      onExitMouseEnter={action("Exit Mouse Enter")}
      onExitMouseLeave={action("Exit Mouse Leave")}
      onExitClick={action("Exit Click")}
      statusText={text("Status Text", "Status Text")}
    />
  ))
  .add("dismissal", () => (
    <HeroWindow
      hero={heroBase}
      visible={true}
      dismissVisible={boolean("Dismiss Visible", true)}
      onDismissMouseEnter={action("Dismiss Mouse Enter")}
      onDismissMouseLeave={action("Dismiss Mouse Leave")}
      onDismissClick={action("Dismiss Hero Click")}
    />
  ));
