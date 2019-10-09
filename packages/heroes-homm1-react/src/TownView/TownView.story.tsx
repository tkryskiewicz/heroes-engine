import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { buildStructure } from "heroes-core";
import { constructTown, towns } from "heroes-homm1";

import { town } from "../stories";
import { TownView } from "./TownView";

const data: Parameters<typeof constructTown>[2] = {
  towns: towns.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
};

storiesOf("TownView", module)
  .add("default", () => {
    const townId = town("Town");

    const t = constructTown(townId, "Name", data);

    return (
      <TownView
        town={{ id: t.id, structures: t.structures.map(buildStructure) }}
        onStructureClick={action("Structure Click")}
      />
    );
  });
