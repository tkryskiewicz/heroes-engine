import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TownId } from "heroes-homm1";

import { townOptions } from "../stories";
import { TownView, TownViewProps } from "./TownView";

storiesOf(TownView.name, module)
  .add("default", () => {
    const town: TownViewProps["town"] = {
      id: select("Town", townOptions, TownId.Farm),
    };

    return (
      <TownView
        town={town}
      />
    );
  });
