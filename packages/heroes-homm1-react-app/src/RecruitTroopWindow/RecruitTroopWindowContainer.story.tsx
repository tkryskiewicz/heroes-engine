import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";
import { creature, resourceAmounts } from "heroes-homm1-react";

import { RecruitTroopWindowContainer } from "./RecruitTroopWindowContainer";

storiesOf("RecruitTroopWindowContainer", module)
  .add("default", () => (
    <RecruitTroopWindowContainer
      visible={boolean("Visible", true)}
      resources={resourceAmounts("Resources", { [ResourceId.Gold]: 500 })}
      creature={creature("Creature")}
      cost={resourceAmounts("Cost", { [ResourceId.Gold]: 100 })}
      availableCount={number("Available Count", 10, { range: true, min: 0, max: 99, step: 1 })}
      count={number("Count", 2, { range: true, min: 0, max: 99, step: 1 })}
      onCountChange={action("Count Change")}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
