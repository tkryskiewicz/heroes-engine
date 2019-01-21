import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { Alignment, constructTown, TownId } from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView } from "./TownView";

storiesOf("TownView", module)
  .add("default", () => {
    const townId = select("Town", townOptions, TownId.Farm);

    const town = constructTown(townId, "Name", Alignment.Red, []);

    return (
      <TownView
        town={{ ...town, structures: town.structures.map(buildStructure) }}
        onStructureClick={action("Structure Click")}
      />
    );
  });
