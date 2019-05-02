import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObjectSlot, EditorObjectSlotProps } from "./EditorObjectSlot";

const sizeOptions: { readonly [s: string]: EditorObjectSlotProps["size"] } = {
  Large: "large",
  Small: "small",
};

const renderObject = () => <Placeholder name="Object" />;

storiesOf("editor/EditorObjectSlot", module)
  .add("default", () => (
    <EditorObjectSlot
      size={select("Size", sizeOptions, "large")}
      renderObject={renderObject}
    />
  ));
