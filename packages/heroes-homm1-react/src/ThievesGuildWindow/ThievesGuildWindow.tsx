import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import * as styles from "./ThievesGuildWindow.module.scss";

import { GameText } from "../core";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
} from "../TownDetailWindow";
import { messages } from "./messages";

export interface Ranking {
  readonly [index: number]: string[];
}

interface ThievesGuildWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  readonly townCount: Ranking;
  readonly castleCount: Ranking;
  readonly heroCount: Ranking;
  readonly gold: Ranking;
  readonly primaryResources: Ranking;
  readonly secondaryResources: Ranking;
  readonly foundObelisksCount: Ranking;
  readonly armyStrength: Ranking;
}

class ThievesGuildWindow extends React.Component<ThievesGuildWindowProps> {
  public componentDidMount() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.row}>
          <div />
          <div>
            <div>
              <GameText size="large">
                <FormattedMessage {...messages.first} />
              </GameText>
            </div>
          </div>
          <div>
            <div>
              <GameText size="large">
                <FormattedMessage {...messages.second} />
              </GameText>
            </div>
          </div>
          <div>
            <div>
              <GameText size="large">
                <FormattedMessage {...messages.third} />
              </GameText>
            </div>
          </div>
          <div>
            <div>
              <GameText size="large">
                <FormattedMessage {...messages.fourth} />
              </GameText>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.townCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.townCount)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.castleCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.castleCount)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.heroCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.heroCount)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.gold} />
            </GameText>
          </div>
          {this.renderStats(this.props.gold)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.primaryResources} />
            </GameText>
          </div>
          {this.renderStats(this.props.primaryResources)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.secondaryResources} />
            </GameText>
          </div>
          {this.renderStats(this.props.secondaryResources)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.foundObelisksCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.foundObelisksCount)}
        </div>
        <div className={styles.row}>
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.armyStrength} />
            </GameText>
          </div>
          {this.renderStats(this.props.armyStrength)}
        </div>
      </div>
    );
  }

  private renderStats(ranking: Ranking) {
    const content = [...new Array(4).keys()]
      .map((_, i) => this.renderRanking(ranking[i] || [], i));

    return content;
  }

  private renderRanking(ranking: string[], index: number) {
    return (
      <div key={index}>
        {ranking.map((a) => this.renderAlignment(a))}
      </div>
    );
  }

  private renderAlignment(alignment: string) {
    return (
      <img
        key={alignment}
        src={`assets/alignments/${alignment}/flag.png`}
      />
    );
  }
}

const ThievesGuildWindowWrapped = injectIntl(
  withTownDetailWindow()(ThievesGuildWindow),
);

type ThievesGuildWindowWrappedProps = ExtractProps<typeof ThievesGuildWindowWrapped>;

export {
  ThievesGuildWindowWrapped as ThievesGuildWindow,
  ThievesGuildWindowWrappedProps as ThievesGuildWindowProps,
};
