import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, Resources, Structure, Town } from "heroes-core";

import * as styles from "./TownWindow.module.scss";

import { BigBar } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import { getCreatureNameMessage, getStructureNameMessage } from "../messages";
import { recruitTroopWindowMessages } from "../RecruitTroopWindow";
import { TownView } from "../TownView";
import { messages } from "./messages";

const TroopSlotCount = 5;

interface TownWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly town: Town;
  readonly visitingHero?: Hero;
  readonly resources: Resources;
  readonly renderCrest: () => React.ReactNode;
  readonly renderGarrisonTroop: (index: number) => React.ReactNode;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly renderHeroTroop: (index: number) => React.ReactNode;
  readonly renderTreasury: () => React.ReactNode;
  readonly visibleStructureDetails?: string;
  readonly getStructureDetails: (structure: Structure, town: string, resources: Resources, props: {
    readonly onRecruitTroop: (structure: string, count: number) => void;
    readonly onCloseClick: () => void;
  }) => React.ReactNode | undefined;
  readonly onOpenStructureDetailsClick: (structure: string) => void;
  readonly onCloseStructureDetailsClick: () => void;
  readonly onRecruitTroop: (town: string, structure: string, count: number) => void;
  readonly onExitClick: () => void;
  readonly statusText: string;
}

type DefaultProp =
  "renderCrest" |
  "renderGarrisonTroop" |
  "renderHeroPortrait" |
  "renderHeroTroop" |
  "renderTreasury" |
  "getStructureDetails" |
  "onOpenStructureDetailsClick" |
  "onCloseStructureDetailsClick" |
  "onRecruitTroop" |
  "onExitClick" |
  "statusText";

interface TownWindowState {
  readonly statusText: string;
}

class TownWindow extends React.Component<TownWindowProps, TownWindowState> {
  public static readonly defaultProps: Pick<TownWindowProps, DefaultProp> = {
    getStructureDetails: () => undefined,
    onCloseStructureDetailsClick: () => undefined,
    onExitClick: () => undefined,
    onOpenStructureDetailsClick: () => undefined,
    onRecruitTroop: () => undefined,
    renderCrest: () => undefined,
    renderGarrisonTroop: () => undefined,
    renderHeroPortrait: () => undefined,
    renderHeroTroop: () => undefined,
    renderTreasury: () => undefined,
    statusText: "",
  };

  public readonly state: TownWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, resources, visibleStructureDetails } = this.props;

    return (
      <div className={styles.root}>
        <TownView
          town={town}
          onStructureMouseEnter={this.onStructureMouseEnter}
          onStructureMouseLeave={this.onStructureMouseLeave}
          onStructureClick={this.onStructureClick}
        />
        <div className={styles.strip}>
          <div className={styles.townName}>
            <GameText size="small">
              {town.name}
            </GameText>
          </div>
          <div className={styles.crest}>
            {this.props.renderCrest()}
          </div>
          {this.renderGarrisonArmy()}
          <div className={styles.heroPortrait}>
            {this.props.renderHeroPortrait()}
          </div>
          {this.renderHeroArmy()}
          <div className={styles.treasury}>
            {this.props.renderTreasury()}
          </div>
        </div>
        <BigBar>
          {this.props.statusText || this.state.statusText}
        </BigBar>
        {visibleStructureDetails && this.renderStructureDetails(town, resources, visibleStructureDetails)}
      </div>
    );
  }

  private readonly renderGarrisonArmy = () => {
    const content = [...new Array(TroopSlotCount).keys()]
      .map((i) => this.renderGarrisonTroop(i));

    return (
      <div className={styles.garrisonArmy}>
        {content}
      </div>
    );
  }

  private readonly renderGarrisonTroop = (index: number) => {
    return (
      <div
        key={index}
        className={styles.troop}
      >
        {this.props.renderGarrisonTroop(index)}
      </div>
    );
  }

  private readonly renderHeroArmy = () => {
    const content = [...new Array(TroopSlotCount).keys()]
      .map((i) => this.renderHeroTroop(i));

    return (
      <div className={styles.heroArmy}>
        {content}
      </div>
    );
  }

  private readonly renderHeroTroop = (index: number) => {
    return (
      <div
        key={index}
        className={styles.troop}
      >
        {this.props.renderHeroTroop(index)}
      </div>
    );
  }

  private readonly onStructureMouseEnter = (structure: string) => {
    const { formatMessage } = this.props.intl;

    const struc = this.props.town.structures.find((s) => s.id === structure)!;

    let statusText = formatMessage(getStructureNameMessage(struc.id, struc.isBuilt));

    if (struc.dwelling) {
      const creatureName = formatMessage(getCreatureNameMessage(struc.dwelling.creature));

      statusText = formatMessage(recruitTroopWindowMessages.title, { creature: creatureName });
    }

    this.setStatusText(statusText);
  }

  private readonly onStructureMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onStructureClick = (structure: string) => {
    this.props.onOpenStructureDetailsClick(structure);
  }

  private renderStructureDetails(town: Town, resources: Resources, structure: string) {
    const struc = town.structures.find((s) => s.id === structure)!;

    // TODO: optimize and handle case with result missing
    const structureDetails = this.props.getStructureDetails(struc, town.id, resources, {
      onCloseClick: this.onCloseStructureDetailsClick,
      onRecruitTroop: this.onRecruitTroop,
    });

    return structureDetails;
  }

  private readonly onCloseStructureDetailsClick = () => {
    this.props.onCloseStructureDetailsClick();
  }

  private readonly onRecruitTroop = (structure: string, count: number) => {
    this.props.onRecruitTroop(this.props.town.id, structure, count);
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const TownWindowWrapped = injectIntl(
  withGameWindow(640)(TownWindow),
);

type TownWindowWrappedProps = ExtractProps<typeof TownWindowWrapped>;

export {
  TownWindowWrapped as TownWindow,
  TownWindowWrappedProps as TownWindowProps,
};
