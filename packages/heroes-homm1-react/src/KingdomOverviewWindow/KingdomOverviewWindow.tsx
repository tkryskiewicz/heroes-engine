import * as React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClassIds, Resource, TownIds } from "heroes-homm1";

import * as styles from "./KingdomOverviewWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";
import { messages } from "./messages";

const resourceOrder = [
  Resource.Wood,
  Resource.Mercury,
  Resource.Ore,
  Resource.Sulfur,
  Resource.Crystal,
  Resource.Gems,
  Resource.Gold,
];

interface KingdomOverviewWindowProps {
  readonly alignment: string;
  readonly renderHeroClassSummary: (heroClass: string) => React.ReactNode;
  readonly renderCastleSummary: (town: string) => React.ReactNode;
  readonly renderTownSummary: (town: string) => React.ReactNode;
  readonly renderMineSummary: (resource: string) => React.ReactNode;
  readonly renderResourceSummary: (resource: string) => React.ReactNode;
  readonly goldPerDay: number;
  readonly onExitClick?: () => void;
}

type DefaultProp =
  "renderHeroClassSummary" |
  "renderCastleSummary" |
  "renderTownSummary" |
  "renderMineSummary" |
  "renderResourceSummary";

class KingdomOverviewWindow extends React.Component<KingdomOverviewWindowProps> {
  public static readonly defaultProps: Pick<KingdomOverviewWindowProps, DefaultProp> = {
    renderCastleSummary: () => undefined,
    renderHeroClassSummary: () => undefined,
    renderMineSummary: () => undefined,
    renderResourceSummary: () => undefined,
    renderTownSummary: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        {this.renderBanner(this.props.alignment)}
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <GameText size="large">
              <FormattedMessage {...messages.title} />
            </GameText>
          </div>
          <div className={styles.date}>
            <GameText size="large">
              Month 1, Week 1, Day 1
            </GameText>
          </div>
        </div>
        <div className={styles.heroClassSummary}>
          <div className={styles.summaryTitle}>
            <GameText size="normal">
              <FormattedMessage {...messages.heroClassOverview} />
            </GameText>
          </div>
          <div className={styles.summaryContent}>
            {this.renderHeroClasses()}
          </div>
        </div>
        <div className={styles.castleSummary}>
          <div className={styles.summaryTitle}>
            <GameText size="normal">
              <FormattedMessage {...messages.castleOverview} />
            </GameText>
          </div>
          <div className={styles.summaryContent}>
            {this.renderCastles()}
          </div>
        </div>
        <div className={styles.townSummary}>
          <div className={styles.summaryTitle}>
            <GameText size="normal">
              <FormattedMessage {...messages.townOverview} />
            </GameText>
          </div>
          <div className={styles.summaryContent}>
            {this.renderTowns()}
          </div>
        </div>
        <div className={styles.mineSummary}>
          <div className={styles.summaryTitle}>
            <GameText size="normal">
              <FormattedMessage {...messages.mineOverview} />
            </GameText>
          </div>
          <div className={styles.summaryContent}>
            {this.renderMines()}
          </div>
        </div>
        <div className={styles.resourceSummary}>
          <div className={styles.summaryTitle}>
            <GameText size="normal">
              <FormattedMessage {...messages.resourceOverview} />
            </GameText>
          </div>
          <div className={styles.summaryContent}>
            {this.renderResources()}
          </div>
        </div>
        {this.renderGoldPerDay(this.props.goldPerDay)}
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }

  private renderBanner(alignment: string) {
    return (
      <img
        className={styles.banner}
        src={`assets/alignments/${alignment}/banner.jpg`}
      />
    );
  }

  private renderHeroClasses() {
    return HeroClassIds.map((c) => (
      <div
        key={c}
        className={styles.heroClassSummaryItem}
      >
        {this.props.renderHeroClassSummary(c)}
      </div>
    ));
  }

  private renderCastles() {
    return TownIds.map((t) => (
      <div
        key={t}
        className={styles.castleSummaryItem}
      >
        {this.props.renderCastleSummary(t)}
      </div>
    ));
  }

  private renderTowns() {
    return TownIds.map((t) => (
      <div
        key={t}
        className={styles.townSummaryItem}
      >
        {this.props.renderTownSummary(t)}
      </div>
    ));
  }

  private renderMines() {
    return resourceOrder.map((r) => (
      <div
        key={r}
        className={styles.mineSummaryItem}
      >
        {this.props.renderMineSummary(r)}
      </div>
    ));
  }

  private renderResources() {
    return resourceOrder.map((r) => (
      <div
        key={r}
        className={styles.resourceSummaryItem}
      >
        {this.props.renderResourceSummary(r)}
      </div>
    ));
  }

  private renderGoldPerDay(amount: number) {
    return (
      <div className={styles.goldPerDay}>
        <div className={styles.goldPerDayText}>
          <GameText size="normal">
            <FormattedMessage {...messages.goldPerDay} />:<br />
            {amount}
          </GameText>
        </div>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(640)(KingdomOverviewWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as KingdomOverviewWindow,
  ComponentWrappedProps as KingdomOverviewWindowProps,
};
