import { storiesOf } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { AdventureWindow } from "./AdventureWindow";

const renderAdventureMap = () => <Placeholder name="Adventure Map" />;
const renderWorldMap = () => <Placeholder name="World Map" />;
const renderAdventureButtons = () => <Placeholder name="Adventure Buttons" />;
const renderHeroLocators = () => <Placeholder name="Hero Locators" />;
const renderTownLocators = () => <Placeholder name="Town Locators" />;
const renderStatusWindow = () => <Placeholder name="Status Window" />;

storiesOf("AdventureWindow", module)
  .add("default", () => (
    <AdventureWindow
      renderAdventureMap={renderAdventureMap}
      renderWorldMap={renderWorldMap}
      renderAdventureButtons={renderAdventureButtons}
      renderHeroLocators={renderHeroLocators}
      renderTownLocators={renderTownLocators}
      renderStatusWindow={renderStatusWindow}
    />
  ));
