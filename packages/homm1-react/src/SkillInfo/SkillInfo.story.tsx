import { number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Skill } from "heroes-homm1";

import { skillOptions } from "../stories";
import { SkillInfo } from "./SkillInfo";

storiesOf(SkillInfo.name, module)
  .add("default", () => (
    <SkillInfo
      skill={select("Skill", skillOptions, Skill.AttackSkill)}
      value={number("Value", 0, { range: true, min: 0, max: 10, step: 1 })}
    />
  ));
