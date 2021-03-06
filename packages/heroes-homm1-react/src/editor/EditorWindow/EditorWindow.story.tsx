import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../Placeholder";
import { EditorWindow } from "./EditorWindow";

const renderAdventureMap = () => <Placeholder name="Adventure Map" />;
const renderVerticalCellNumbers = () => <Placeholder name="VC" />;
const renderHorizontalCellNumbers = () => <Placeholder name="HC" />;
const renderHorizontalScrollbar = () => <Placeholder name="HS" />;
const renderVerticalScrollbar = () => <Placeholder name="VS" />;
const renderWorldMap = () => <Placeholder name="World Map" />;
const renderOptions = () => <Placeholder name="Options" />;
const renderOptionDetails = () => <Placeholder name="Option Details" />;
const renderButtons = () => <Placeholder name="Buttons" />;

storiesOf("editor|EditorWindow", module)
  .add("default", () => (
    <EditorWindow
      renderAdventureMap={renderAdventureMap}
      renderVerticalCellNumbers={renderVerticalCellNumbers}
      renderHorizontalCellNumbers={renderHorizontalCellNumbers}
      renderHorizontalScrollbar={renderHorizontalScrollbar}
      renderVerticalScrollbar={renderVerticalScrollbar}
      renderWorldMap={renderWorldMap}
      renderOptions={renderOptions}
      renderOptionDetails={renderOptionDetails}
      renderButtons={renderButtons}
    />
  ))
  .add("scrolling", () => (
    <EditorWindow
      onScrollTopLeft={action("Scroll Top Left")}
      onScrollTopRight={action("Scroll Top Right")}
      onScrollBottomLeft={action("Scroll Bottom Left")}
      onScrollBottomRight={action("Scroll Bottom Right")}
    />
  ))
  .add("message", () => (
    <EditorWindow
      message={text("Message", "message")}
    />
  ));
