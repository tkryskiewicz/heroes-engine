import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Skill } from "heroes-homm1";

import { skillOptions } from "../stories";
import { SkillDetailsPrompt } from "./SkillDetailsPrompt";

storiesOf("SkillDetailsPrompt", module)
  .add("default", () => (
    <SkillDetailsPrompt
      visible={boolean("Visible", true)}
      skill={select("Skill", skillOptions, Skill.AttackSkill)}
      onConfirmClick={action("Confirm Click")}
    />
  ));
