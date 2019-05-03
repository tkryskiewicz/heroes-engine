import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { editorObjectType } from "../../stories";
import { ObjectsOptionDetails } from "./ObjectsOptionDetails";

const renderObject = () => <Placeholder name="Object" />;

storiesOf("editor/ObjectsOptionDetails", module)
  .add("default", () => (
    <ObjectsOptionDetails
      onSlotClick={action("Slot Click")}
      selectedObjectType={editorObjectType("Selected Object Type")}
      onPreviousTypeClick={action("Previous Type Click")}
      onNextTypeClick={action("Next Type Click")}
      renderObject={renderObject}
    />
  ));
