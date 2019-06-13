import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { creatures, LuckType, MoraleType } from "heroes-homm1";
import { creature, luckType, moraleType, skills } from "heroes-homm1-react";

import { TroopWindowContainer, TroopWindowContainerProps } from "./TroopWindowContainer";

const data: TroopWindowContainerProps["data"] = {
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
};

storiesOf("TroopWindowContainer", module)
  .add("default", () => (
    <TroopWindowContainer
      visible={boolean("Visible", true)}
      data={data}
      index={0}
      creature={creature("Creature")}
      morale={moraleType("Morale")}
      luck={luckType("Luck")}
      count={number("Count", 1, { range: true, min: 0, max: 9999, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ))
  .add("skill enhancements", () => (
    <TroopWindowContainer
      visible={true}
      data={data}
      index={0}
      creature={creature("Creature")}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      skillEnhancements={skills("Skill Enhancements")}
      count={1}
    />
  ))
  .add("dismissal", () => (
    <TroopWindowContainer
      visible={true}
      data={data}
      index={0}
      creature={creature("Creature")}
      morale={MoraleType.Neutral}
      luck={LuckType.Neutral}
      count={1}
      dismissible={boolean("Dismissible", true)}
      dismissPromptVisible={boolean("Dismiss Prompt Visible", false)}
      onDismissClick={action("Dismiss Click")}
      onConfirmDismissClick={action("Confirm Dismiss Click")}
      onCancelDismissClick={action("Cancel Dismiss Click")}
    />
  ));
