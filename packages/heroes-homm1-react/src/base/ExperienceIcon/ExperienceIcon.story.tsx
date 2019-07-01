import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { ExperienceIcon, ExperienceIconProps } from "./ExperienceIcon";

const sizeOptions: ExperienceIconProps["size"][] = [
  "large",
  "small",
];

storiesOf("base|ExperienceIcon", module)
  .add("default", () => (
    <ExperienceIcon
      size={select("Size", sizeOptions, "large")}
      onMouseEnter={action("Mouse Enter")}
      onMouseLeave={action("Mouse Leave")}
      onClick={action("Click")}
    />
  ));
