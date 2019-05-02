import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObjectsWindow } from "./EditorObjectsWindow";

const renderObject = (index: number) => <Placeholder name={index.toString()} />;

storiesOf("editor/EditorObjectsWindow", module)
  .add("defalut", () => (
    <EditorObjectsWindow
      visible={boolean("Visible", true)}
      renderObject={renderObject}
    />
  ));
