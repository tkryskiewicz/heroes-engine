import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { alignmentOptions, heroClass } from "../../stories";
import { Crest } from "./Crest";

storiesOf("base/Crest", module)
  .add("default", () => (
    <Crest
      alignment={select("Alignment", alignmentOptions, Alignment.Red)}
      heroClass={heroClass("Hero Class")}
      onClick={action("Click")}
    />
  ));
