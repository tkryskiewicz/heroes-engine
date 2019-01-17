import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { Alignment, constructTown, TownId } from "heroes-homm1";

import { townOptions } from "../../stories";
import { CastleOptionsWindow } from "./CastleOptionsWindow";

storiesOf("TownWindow/CastleOptionsWindow", module)
  .add("default", () => {
    const townId = select("Town", townOptions, TownId.Farm);

    const town = constructTown(townId, "Name", Alignment.Red, []);

    return (
      <CastleOptionsWindow
        town={town.id}
        canConstructStructures={boolean("Can Construct Structures", true)}
        structures={town.structures.map(buildStructure)}
        resources={{}}
        visible={boolean("Visible", true)}
        onOpenOptionDetailsClick={action("Open Option Details Click")}
        onCloseOptionDetailsClick={action("Close Option Details Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
