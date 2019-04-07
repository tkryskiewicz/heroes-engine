import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { constructTown } from "heroes-homm1";

import { town } from "../stories";
import { TownView } from "./TownView";

storiesOf("TownView", module)
  .add("default", () => {
    const townId = town("Town");

    const t = constructTown(townId, "Name");

    return (
      <TownView
        town={{ id: t.id, structures: t.structures.map(buildStructure) }}
        onStructureClick={action("Structure Click")}
      />
    );
  });
