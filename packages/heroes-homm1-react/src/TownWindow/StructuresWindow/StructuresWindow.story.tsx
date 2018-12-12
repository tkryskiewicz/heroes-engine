import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { commonStructures, constructStructure, farmStructures, TownId } from "heroes-homm1";

import { StructuresWindow } from "./StructuresWindow";

storiesOf(`TownWindow/${StructuresWindow.name}`, module)
  .add("default", () => (
    <StructuresWindow
      town={TownId.Farm}
      structures={[...commonStructures, ...farmStructures].map(constructStructure).map(buildStructure)}
      resources={{}}
      onExitClick={action("Exit Click")}
    />
  ));
