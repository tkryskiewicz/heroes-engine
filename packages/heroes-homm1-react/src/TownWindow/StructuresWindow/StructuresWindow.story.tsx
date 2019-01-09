import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { Alignment, constructTown, TownId } from "heroes-homm1";

import { townOptions } from "../../stories";
import { StructuresWindow } from "./StructuresWindow";

storiesOf("TownWindow/StructuresWindow", module)
  .add("default", () => {
    const townId = select("Town", townOptions, TownId.Farm);

    const town = constructTown(townId, "Name", Alignment.Red, []);

    return (
      <StructuresWindow
        town={town.id}
        canConstructStructures={boolean("Can Construct Structures", true)}
        structures={town.structures.map(buildStructure)}
        resources={{}}
        visible={boolean("Visible", true)}
        onExitClick={action("Exit Click")}
      />
    );
  });
