import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";

import Readme = require("./README.md");

import { Placeholder } from "../Placeholder";
import { alignment } from "../stories";
import { KingdomOverviewWindow } from "./KingdomOverviewWindow";

const renderTitle = () => <Placeholder name="Title" />;
const renderDate = () => <Placeholder name="Date" />;
const renderHeroClassSummary = (heroClass: string) => <Placeholder name={heroClass} />;
const renderCastleSummary = (town: string) => <Placeholder name={town} />;
const renderTownSummary = (town: string) => <Placeholder name={town} />;
const renderMineSummary = (resource: string) => <Placeholder name={resource} />;
const renderResourceSummary = (resource: string) => <Placeholder name={resource} />;

storiesOf("KingdomOverviewWindow", module)
  .addDecorator(withReadme(Readme))
  .add("default", () => (
    <KingdomOverviewWindow
      visible={boolean("Visible", true)}
      alignment={alignment("Alignment")}
      renderTitle={renderTitle}
      renderDate={renderDate}
      renderHeroClassSummary={renderHeroClassSummary}
      renderCastleSummary={renderCastleSummary}
      renderTownSummary={renderTownSummary}
      renderMineSummary={renderMineSummary}
      renderResourceSummary={renderResourceSummary}
      goldPerDay={number("Gold Per Day", 0, { range: true, min: 0, max: 9999, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ));
