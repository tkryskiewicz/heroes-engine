import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignment } from "../../stories";
import { AlignmentDetails } from "./AlignmentDetails";

storiesOf("editor/AlignmentDetails", module)
  .add("default", () => (
    <AlignmentDetails
      alignments={Object.values(Alignment)}
      allowNeutral={boolean("Allow Netural", false)}
      value={alignment("Alignment")}
      onValueChange={action("Value Change")}
    />
  ));
