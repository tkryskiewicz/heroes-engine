import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import {
  commonStructures,
  constructStructure,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
  TownId,
} from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

const structures = {
  [TownId.Farm]: farmStructures,
  [TownId.Plains]: plainsStructures,
  [TownId.Forest]: forestStructures,
  [TownId.Mountains]: mountainsStructures,
};

storiesOf(TownView.name, module)
  .add("default", () => {
    const townId = select("Town", townOptions, TownId.Farm);

    const town: TownViewProps["town"] = {
      id: townId,
      structures: [
        ...coreStructures,
        ...commonStructures,
        ...structures[townId],
      ].map(constructStructure).map(buildStructure),
    };

    return (
      <TownView
        town={town}
        onStructureClick={action("Structure Click")}
      />
    );
  });
