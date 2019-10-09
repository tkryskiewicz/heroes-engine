import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { hero, skills } from "../../stories";
import { HeroLevelUpPrompt } from "./HeroLevelUpPrompt";

storiesOf("prompt|HeroLevelUpPrompt", module)
  .add("default", () => (
    <HeroLevelUpPrompt
      visible={boolean("Visible", true)}
      hero={hero("Hero")}
      skillBonuses={skills("Skill Bonuses")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
