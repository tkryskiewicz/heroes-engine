import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { hero } from "../stories";
import { SurrenderWindow } from "./SurrenderWindow";

const renderHeroPortrait = () => <Placeholder name="Hero Portrait" />;

storiesOf("SurrenderWindow", module)
  .add("default", () => (
    <SurrenderWindow
      visible={boolean("Visible", true)}
      hero={hero("Hero")}
      renderHeroPortrait={renderHeroPortrait}
      cost={number("Cost", 1000, { range: true, min: 1, max: 999999, step: 1 })}
      onAcceptClick={action("Accept Click")}
      onDeclineClick={action("Decline Click")}
    />
  ));
