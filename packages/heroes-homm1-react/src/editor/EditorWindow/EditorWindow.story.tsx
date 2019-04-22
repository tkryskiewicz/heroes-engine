import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorWindow } from "./EditorWindow";

const renderAdventureWindow = () => <Placeholder name="Adventure Window" />;
const renderHorizontalScrollbar = () => <Placeholder name="HS" />;
const renderVerticalScrollbar = () => <Placeholder name="VS" />;
const renderWorldMap = () => <Placeholder name="World Map" />;
const renderOptions = () => <Placeholder name="Options" />;
const renderOptionDetails = () => <Placeholder name="Option Details" />;
const renderButtons = () => <Placeholder name="Buttons" />;

storiesOf("editor/EditorWindow", module)
  .add("default", () => (
    <EditorWindow
      renderAdventureWindow={renderAdventureWindow}
      onScrollTopLeft={action("Scroll Top Left")}
      onScrollTopRight={action("Scroll Top Right")}
      onScrollBottomLeft={action("Scroll Bottom Left")}
      onScrollBottomRight={action("Scroll Bottom Right")}
      renderHorizontalScrollbar={renderHorizontalScrollbar}
      renderVerticalScrollbar={renderVerticalScrollbar}
      renderWorldMap={renderWorldMap}
      renderOptions={renderOptions}
      renderOptionDetails={renderOptionDetails}
      renderButtons={renderButtons}
    />
  ));
