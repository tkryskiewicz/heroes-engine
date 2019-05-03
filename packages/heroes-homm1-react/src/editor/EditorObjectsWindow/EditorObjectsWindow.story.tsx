import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorObjectsWindow } from "./EditorObjectsWindow";

const renderObject = (object: string) => <Placeholder name={object} />;

storiesOf("editor/EditorObjectsWindow", module)
  .add("defalut", () => (
    <EditorObjectsWindow
      visible={boolean("Visible", true)}
      objects={["objectA", "objectB"]}
      renderObject={renderObject}
    />
  ));