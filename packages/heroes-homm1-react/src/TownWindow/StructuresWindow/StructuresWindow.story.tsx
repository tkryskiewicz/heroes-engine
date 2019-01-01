import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { commonStructures, constructStructure, farmStructures, TownId } from "heroes-homm1";

import { StructuresWindow } from "./StructuresWindow";

storiesOf("TownWindow/StructuresWindow", module)
  .add("default", () => (
    <StructuresWindow
      town={TownId.Farm}
      canConstructStructures={boolean("Can Construct Structures", true)}
      structures={[...commonStructures, ...farmStructures].map(constructStructure).map(buildStructure)}
      resources={{}}
      visible={boolean("Visible", true)}
      onExitClick={action("Exit Click")}
    />
  ));
