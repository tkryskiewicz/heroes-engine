import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./ThievesGuildWindow.scss";

import { GameText } from "../core";
import { withTownDetailWindow, WithTownDetailWindowProps } from "../TownDetailWindow";
import { messages } from "./messages";

export interface Ranking {
  [index: number]: string[];
}

export interface ThievesGuildWindowProps extends WithTownDetailWindowProps {
  townCount: Ranking;
  castleCount: Ranking;
  heroCount: Ranking;
  gold: Ranking;
  primaryResources: Ranking;
  secondaryResources: Ranking;
  foundObelisksCount: Ranking;
  armyStrength: Ranking;
}

class ThievesGuildWindow extends React.Component<ThievesGuildWindowProps> {
  public render() {
    return (
      <div className="thieves-guild-window">
        <div className="thieves-guild-window-row">
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
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.townCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.townCount)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.castleCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.castleCount)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.heroCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.heroCount)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.gold} />
            </GameText>
          </div>
          {this.renderStats(this.props.gold)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.primaryResources} />
            </GameText>
          </div>
          {this.renderStats(this.props.primaryResources)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.secondaryResources} />
            </GameText>
          </div>
          {this.renderStats(this.props.secondaryResources)}
        </div>
        <div className="thieves-guild-window-row">
          <div>
            <GameText size="large">
              <FormattedMessage {...messages.foundObelisksCount} />
            </GameText>
          </div>
          {this.renderStats(this.props.foundObelisksCount)}
        </div>
        <div className="thieves-guild-window-row">
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

const ThievesGuildWindowWrapped = withTownDetailWindow()(ThievesGuildWindow);

export {
  ThievesGuildWindowWrapped as ThievesGuildWindow,
};
