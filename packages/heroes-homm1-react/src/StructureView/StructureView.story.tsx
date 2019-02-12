import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { structure, town } from "../stories";
import { StructureView } from "./StructureView";

storiesOf("StructureView", module)
  .add("default", () => (
    <StructureView
      town={town("Town")}
      structure={structure("Structure")}
      placeholder={boolean("Placeholder", false)}
      onClick={action("Click")}
    />
  ));
