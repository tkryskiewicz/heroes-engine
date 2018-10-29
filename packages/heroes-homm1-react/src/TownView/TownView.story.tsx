import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { StructureId, TownId } from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

storiesOf(TownView.name, module)
  .add("default", () => {
    const town: TownViewProps["town"] = {
      id: select("Town", townOptions, TownId.Farm),
      structures: [
        {
          id: boolean("Is Castle Built", false) ? StructureId.Castle : StructureId.Tent,
          isBuilt: true,
        },
        {
          id: StructureId.MageGuild,
          isBuilt: true,
        },
        {
          id: StructureId.ThievesGuild,
          isBuilt: true,
        },
        {
          id: StructureId.Tavern,
          isBuilt: true,
        },
        {
          id: StructureId.Shipyard,
          isBuilt: true,
        },
        {
          id: StructureId.Well,
          isBuilt: true,
        },
      ],
    };

    return (
      <TownView
        town={town}
      />
    );
  });
