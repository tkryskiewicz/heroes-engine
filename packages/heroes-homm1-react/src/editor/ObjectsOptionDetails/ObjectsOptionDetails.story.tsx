import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../Placeholder";
import { mapObjectType } from "../../stories";
import { ObjectsOptionDetails } from "./ObjectsOptionDetails";

storiesOf("editor|ObjectsOptionDetails", module)
  .add("default", () => (
    <ObjectsOptionDetails
      onSlotClick={action("Slot Click")}
      selectedObjectType={mapObjectType("Selected Object Type")}
      onPreviousTypeClick={action("Previous Type Click")}
      onNextTypeClick={action("Next Type Click")}
    >
      <Placeholder name="Object" />
    </ObjectsOptionDetails>
  ));
