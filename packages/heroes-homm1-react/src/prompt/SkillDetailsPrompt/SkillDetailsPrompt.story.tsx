import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { skill } from "../../stories";
import { SkillDetailsPrompt } from "./SkillDetailsPrompt";

storiesOf("prompt|SkillDetailsPrompt", module)
  .add("default", () => (
    <SkillDetailsPrompt
      visible={boolean("Visible", true)}
      skill={skill("Skill")}
      onConfirmClick={action("Confirm Click")}
    />
  ));
