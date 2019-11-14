import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResourceId } from "heroes-homm1";

import { Placeholder } from "../Placeholder";
import { RecruitTroopWindow } from "./RecruitTroopWindow";

const renderCreature = () => <Placeholder name="Creature" />;

storiesOf("RecruitTroopWindow", module)
  .add("default", () => (
    <RecruitTroopWindow
      visible={boolean("Visible", true)}
      title={text("Title", "Title")}
      renderCreature={renderCreature}
      cost={{ [ResourceId.Gold]: 1000 }}
      availableCount={number("Available Count", 0, { range: true, min: 0, max: 99, step: 1 })}
      count={number("Count", 0, { range: true, min: 0, max: 99, step: 1 })}
      countDisabled={boolean("Count Disabled", false)}
      onCountChange={action("Count Change")}
      onIncrementClick={action("Increment Click")}
      onDecrementClick={action("Decrement Click")}
      onMaxClick={action("Max Click")}
      okayDisabled={boolean("Okay Disabled", false)}
      onOkayClick={action("Okay Click")}
      onCancelClick={action("Cancel Click")}
    />
  ));
