import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { skill, skillValue } from "../../stories";
import { SkillInfo } from "./SkillInfo";

storiesOf("base|SkillInfo", module)
  .add("default", () => (
    <SkillInfo
      skill={skill("Skill")}
      value={skillValue("Value")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
