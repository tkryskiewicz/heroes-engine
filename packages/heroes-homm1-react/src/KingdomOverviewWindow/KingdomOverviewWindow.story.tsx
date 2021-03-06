import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { HeroClassId, ResourceId, TownId } from "heroes-homm1";

import { Placeholder } from "../Placeholder";
import { playerColor } from "../stories";
import { KingdomOverviewWindow } from "./KingdomOverviewWindow";

const renderTitle = () => <Placeholder name="Title" />;
const renderDate = () => <Placeholder name="Date" />;
const renderHeroClassSummary = (heroClass: string) => <Placeholder name={heroClass} />;
const renderCastleSummary = (town: string) => <Placeholder name={town} />;
const renderTownSummary = (town: string) => <Placeholder name={town} />;
const renderMineSummary = (resource: string) => <Placeholder name={resource} />;
const renderResourceSummary = (resource: string) => <Placeholder name={resource} />;

storiesOf("KingdomOverviewWindow", module)
  .add("default", () => (
    <KingdomOverviewWindow
      visible={boolean("Visible", true)}
      playerColor={playerColor("Player Color")}
      renderTitle={renderTitle}
      renderDate={renderDate}
      heroClasses={Object.values(HeroClassId)}
      renderHeroClassSummary={renderHeroClassSummary}
      towns={Object.values(TownId)}
      renderCastleSummary={renderCastleSummary}
      renderTownSummary={renderTownSummary}
      resources={Object.values(ResourceId)}
      renderMineSummary={renderMineSummary}
      renderResourceSummary={renderResourceSummary}
      goldPerDay={number("Gold Per Day", 0, { range: true, min: 0, max: 9999, step: 1 })}
      onExitClick={action("Exit Click")}
    />
  ));
