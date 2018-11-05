import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Town } from "heroes-core";
import { Alignment, HeroClass, TownId } from "heroes-homm1";

import { alignmentOptions, heroClassOptions, townOptions } from "../stories";
import { TownWindow } from "./TownWindow";

storiesOf(TownWindow.name, module)
  .add("default", () => {
    const town: Town = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      garrison: [],
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Town", townOptions, TownId.Farm),
      structures: [],
    };

    return (
      <TownWindow
        town={town}
        resources={{}}
        onCrestClick={action("Crest Click")}
        onExitClick={action("Exit Click")}
      />
    );
  });
