import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignmentOptions } from "../../stories";
import { NewGameWindow } from "../NewGameWindow";
import { AlignmentBox } from "./AlignmentBox";

storiesOf(`${NewGameWindow.name}/${AlignmentBox.name}`, module)
  .add("default", () => (
    <AlignmentBox
      value={select("Value", alignmentOptions, Alignment.Red)}
      onChange={action("Change")}
    />
  ));