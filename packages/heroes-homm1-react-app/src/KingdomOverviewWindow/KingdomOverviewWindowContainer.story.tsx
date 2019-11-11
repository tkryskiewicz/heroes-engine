import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { heroClasses, resources, towns } from "heroes-homm1";
import { gameDate, playerColor, resourceAmounts } from "heroes-homm1-react";

import { KingdomOverviewWindowContainer, KingdomOverviewWindowContainerProps } from "./KingdomOverviewWindowContainer";

const data: KingdomOverviewWindowContainerProps["data"] = {
  heroClasses: heroClasses.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  resources: resources.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  towns: towns.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
};

storiesOf("KingdomOverviewWindowContainer", module)
  .add("default", () => (
    <KingdomOverviewWindowContainer
      visible={boolean("Visible", true)}
      data={data}
      playerColor={playerColor("Player Color")}
      date={gameDate("Date")}
      heroClasses={{}}
      castles={{}}
      towns={{}}
      mines={{}}
      resources={resourceAmounts("Resources")}
      goldPerDay={number("Gold Per Day", 500, { range: true, min: 0, max: 100000, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ));
