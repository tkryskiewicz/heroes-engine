import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { getArmySize, Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import { ArmyStrip, getArmyStripStatusTextMessage, ImageButton } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import { getCreatureNameMessage } from "../messages";
import { messages } from "./messages";

interface HeroWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly title: string;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly renderSkill: (skill: string, value: number) => React.ReactNode;
  readonly renderAdditionalStats: () => React.ReactNode;
  readonly renderCrest: () => React.ReactNode;
  readonly renderArtifact: (index: number) => React.ReactNode;

  readonly dismissVisible: boolean;
  readonly onDismissMouseEnter: () => void;
  readonly onDismissMouseLeave: () => void;
  readonly onDismissClick: () => void;

  readonly selectedTroopIndex?: number;
  readonly onSelectTroop: (index: number) => void;
  // TODO: should this be onOpenTroopDetails?
  readonly onSelectedTroopClick: (index: number) => void;
  readonly onSwapTroops: (hero: string, index: number, withIndex: number) => void;
  readonly renderTroopDetails: (index: number, troop: Troop, dismissible: boolean) => React.ReactNode;
  readonly troopDetailsVisible: boolean;
  readonly onExitTroopDetails: () => void;

  readonly onExitMouseEnter: () => void;
  readonly onExitMouseLeave: () => void;
  readonly onExitClick: () => void;

  readonly statusText: string;
}

type DefaultProp =
  "title" |
  "renderHeroPortrait" |
  "renderSkill" |
  "renderAdditionalStats" |
  "renderCrest" |
  "renderArtifact" |
  "dismissVisible" |
  "onDismissMouseEnter" |
  "onDismissMouseLeave" |
  "onDismissClick" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onSwapTroops" |
  "renderTroopDetails" |
  "troopDetailsVisible" |
  "onExitTroopDetails" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick" |
  "statusText";

interface HeroWindowState {
  readonly statusText: string;
}

class HeroWindow extends React.Component<HeroWindowProps, HeroWindowState> {
  public static readonly defaultProps: Pick<HeroWindowProps, DefaultProp> = {
    dismissVisible: false,
    onDismissClick: () => undefined,
    onDismissMouseEnter: () => undefined,
    onDismissMouseLeave: () => undefined,
    onExitClick: () => undefined,
    onExitMouseEnter: () => undefined,
    onExitMouseLeave: () => undefined,
    onExitTroopDetails: () => undefined,
    onSelectTroop: () => undefined,
    onSelectedTroopClick: () => undefined,
    onSwapTroops: () => undefined,
    renderAdditionalStats: () => undefined,
    renderArtifact: () => undefined,
    renderCrest: () => undefined,
    renderHeroPortrait: () => undefined,
    renderSkill: () => undefined,
    renderTroopDetails: () => undefined,
    statusText: "",
    title: "",
    troopDetailsVisible: false,
  };

  public readonly state: HeroWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero, selectedTroopIndex } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.name}>
          <GameText size="large">
            {this.props.title}
          </GameText>
        </div>
        <div className={styles.portrait}>
          {this.props.renderHeroPortrait()}
        </div>
        {this.renderSkills(hero.skills)}
        <div className={styles.additionalStats}>
          {this.props.renderAdditionalStats()}
        </div>
        <div className={styles.crest}>
          {this.props.renderCrest()}
        </div>
        {this.renderArmy(hero, selectedTroopIndex)}
        {this.props.dismissVisible && this.renderDismissal()}
        {this.renderArtifacts()}
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onMouseEnter={this.props.onExitMouseEnter}
            onMouseLeave={this.props.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
        <div className={styles.title}>
          <GameText size="large">
            {this.props.statusText || this.state.statusText}
          </GameText>
        </div>
      </div>
    );
  }

  private renderSkills(skills: HeroSkills) {
    const content = SkillIds.map((s) => this.renderSkill(s, skills[s] || 0));

    return (
      <div className={styles.skills}>
        {content}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className={styles.skill}
        key={skill}
      >
        {this.props.renderSkill(skill, value)}
      </div>
    );
  }

  private renderArmy(hero: Hero, selectedTroopIndex?: number) {
    const selectedTroop = selectedTroopIndex !== undefined ?
      hero.army[selectedTroopIndex] :
      undefined;

    const troopDismissible = getArmySize(hero.army) > 1;

    const troopDetails = selectedTroopIndex !== undefined &&
      selectedTroop &&
      this.props.troopDetailsVisible &&
      this.props.renderTroopDetails(selectedTroopIndex, selectedTroop, troopDismissible);

    return (
      <div className={styles.army}>
        <ArmyStrip
          army={hero.army}
          selectedTroopIndex={this.props.selectedTroopIndex}
          onTroopMouseEnter={this.onTroopMouseEnter}
          onTroopMouseLeave={this.onTroopMouseLeave}
          onTroopClick={this.onTroopClick}
        />
        {troopDetails}
      </div>
    );
  }

  private readonly onTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedTroopIndex !== undefined ?
      this.props.hero.army[this.props.selectedTroopIndex] :
      undefined;
    const troop = this.props.hero.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onTroopClick = (index: number) => {
    const { selectedTroopIndex } = this.props;

    if (selectedTroopIndex === undefined && this.props.hero.army[index]) {
      this.onSelectTroop(index);
    } else if (index === selectedTroopIndex) {
      this.props.onSelectedTroopClick(index);
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex) {
      this.onSwapTroops(selectedTroopIndex, index);
    }
  }

  private readonly onSelectTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop(index);
  }

  private readonly onSwapTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(this.props.hero.id, index, withIndex);
  }

  private renderArtifacts() {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i));

    return (
      <div className={styles.artifacts}>
        {content}
      </div>
    );
  }

  private renderArtifact(index: number) {
    return (
      <div
        className={styles.artifact}
        key={index}
      >
        {this.props.renderArtifact(index)}
      </div>
    );
  }

  private renderDismissal() {
    return (
      <div className={styles.dismiss}>
        <ImageButton
          images={buttonImages.dismiss}
          onMouseEnter={this.props.onDismissMouseEnter}
          onMouseLeave={this.props.onDismissMouseLeave}
          onClick={this.props.onDismissClick}
        />
      </div>
    );
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

const HeroWindowWrapped = injectIntl(
  withGameWindow(640)(HeroWindow),
);

type HeroWindowWrappedProps = ExtractProps<typeof HeroWindowWrapped>;

export {
  HeroWindowWrapped as HeroWindow,
  HeroWindowWrappedProps as HeroWindowProps,
};
