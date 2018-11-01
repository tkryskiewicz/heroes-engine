import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  commonStructures,
  coreStructures,
  farmStructures,
  forestStructures,
  mountainsStructures,
  plainsStructures,
  TownId,
} from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

// FIXME
const constructStructure = (s: any) => ({
  ...s,
  isBuilt: true,
});

const structures = {
  [TownId.Farm]: farmStructures.map(constructStructure),
  [TownId.Plains]: plainsStructures.map(constructStructure),
  [TownId.Forest]: forestStructures.map(constructStructure),
  [TownId.Mountains]: mountainsStructures.map(constructStructure),
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
      ].map(constructStructure),
    };

    return (
      <TownView
        town={town}
        onStructureClick={action("Structure Click")}
      />
    );
  });
