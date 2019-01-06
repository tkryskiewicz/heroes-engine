import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignmentOptions } from "../../stories";
import { AlignmentJewel } from "./AlignmentJewel";

storiesOf("AlignmentJewel", module)
  .add("default", () => (
    <AlignmentJewel
      value={select("Value", alignmentOptions, Alignment.Red)}
      onClick={action("Click")}
    />
  ));
