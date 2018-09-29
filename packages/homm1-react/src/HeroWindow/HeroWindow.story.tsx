import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero } from "heroes-core";
import { Alignment, HeroClass, HeroId } from "heroes-homm1";

import { alignmentOptions, heroClassOptions, heroOptions } from "../stories";
import { HeroWindow } from "./HeroWindow";

storiesOf(HeroWindow.name, module)
  .add("default", () => {
    const hero: Hero = {
      alignment: select("Alignment", alignmentOptions, Alignment.Red),
      heroClass: select("Hero Class", heroClassOptions, HeroClass.Knight),
      id: select("Hero", heroOptions, HeroId.LordKilburn),
      skills: {},
    };

    return (
      <HeroWindow
        hero={hero}
      />
    );
  });
