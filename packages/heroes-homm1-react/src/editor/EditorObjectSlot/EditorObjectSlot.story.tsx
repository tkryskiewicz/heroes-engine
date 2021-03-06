import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObjectSlot, EditorObjectSlotProps } from "./EditorObjectSlot";

const sizeOptions: EditorObjectSlotProps["size"][] = [
  "large",
  "small",
];

storiesOf("editor|EditorObjectSlot", module)
  .add("default", () => (
    <EditorObjectSlot
      size={select("Size", sizeOptions, "large")}
      onClick={action("Click")}
    >
      <Placeholder name="Object" />
    </EditorObjectSlot>
  ));
