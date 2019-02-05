import { storiesOf } from "@storybook/react";
import * as React from "react";

import { AdventureScreen } from "./AdventureScreen";

const renderAdventureButtons = () => <span>Adventure Buttons</span>;

storiesOf("AdventureScreen", module)
  .add("default", () => (
    <AdventureScreen
      renderAdventureButtons={renderAdventureButtons}
    />
  ));
