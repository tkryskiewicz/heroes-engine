import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Skill } from "heroes-homm1";

import { hero } from "../../stories";
import { HeroLevelUpPrompt } from "./HeroLevelUpPrompt";

storiesOf("prompt|HeroLevelUpPrompt", module)
  .add("default", () => (
    <HeroLevelUpPrompt
      visible={boolean("Visible", true)}
      hero={hero("Hero")}
      skillBonuses={{ [Skill.Attack]: 1, [Skill.Defense]: 2 }}
      onConfirmClick={action("Confirm Click")}
    />
  ));
