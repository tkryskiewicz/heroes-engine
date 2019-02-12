import { action } from "@storybook/addon-actions";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { skill } from "../../stories";
import { SkillInfo } from "./SkillInfo";

storiesOf("HeroWindow/SkillInfo", module)
  .add("default", () => (
    <SkillInfo
      skill={skill("Skill")}
      value={number("Value", 0, { range: true, min: 0, max: 10, step: 1 })}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
