import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Structure } from "heroes-core";
import { commonStructures, farmStructures, TownId } from "heroes-homm1";

import { TownWindow } from "../TownWindow";
import { StructuresWindow } from "./StructuresWindow";

const constructStructure = (s: any): Structure => ({
  ...s,
  isBuilt: true,
});

storiesOf(`${TownWindow.name}/${StructuresWindow.name}`, module)
  .add("default", () => (
    <StructuresWindow
      town={TownId.Farm}
      structures={[...commonStructures, ...farmStructures].map(constructStructure)}
      resources={{}}
      onExitClick={action("Exit Click")}
    />
  ));
