import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { buildStructure } from "heroes-core";
import { Alignment, constructTown } from "heroes-homm1";

import { town } from "../stories";
import { CastleOptionsWindow } from "./CastleOptionsWindow";

storiesOf("CastleOptionsWindow", module)
  .add("default", () => {
    const townId = town("Town");

    const t = constructTown(townId, "Name", Alignment.Red, []);

    return (
      <CastleOptionsWindow
        town={t.id}
        canConstructStructures={boolean("Can Construct Structures", true)}
        options={t.structures.map(buildStructure)}
        resources={{}}
        visible={boolean("Visible", true)}
        onOpenOptionDetailsClick={action("Open Option Details Click")}
        onCloseOptionDetailsClick={action("Close Option Details Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
